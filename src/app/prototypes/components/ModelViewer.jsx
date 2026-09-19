"use client";

import { Center, Environment, Html, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useMemo } from "react";
import { Box3, NeutralToneMapping, PMREMGenerator, Vector3 } from "three";
import ModelLoading from "./ModelLoading";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

// Neutral studio reflections generated locally (drei's presets download HDRs from a third-party CDN).
function StudioEnvironment({ intensity }) {
    const gl = useThree((state) => state.gl);
    const env = useMemo(() => {
        const pmrem = new PMREMGenerator(gl);
        const texture = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
        pmrem.dispose();
        return texture;
    }, [gl]);
    useEffect(() => () => env.dispose(), [env]);
    return <Environment map={env} environmentIntensity={intensity} />;
}

function Model({ url, rotation }) {
    const { scene } = useGLTF(url);
    // CAD exports come in arbitrary units and origins: normalize to ~2 units, centered.
    const [model, scale] = useMemo(() => {
        const cloned = scene.clone();
        const size = new Box3().setFromObject(cloned).getSize(new Vector3());
        return [cloned, 2 / Math.max(size.x, size.y, size.z)];
    }, [scene]);
    return (
        <Center>
            <primitive object={model} scale={scale} rotation={rotation} />
        </Center>
    );
}

export default function ModelViewer({ modelUrl, modelRotation }) {
    if (!modelUrl) {
        return (
            <div className="h-full w-full grid place-items-center text-sea-light/70 bg-gradient-to-br from-[#0b2a38] to-[#0a1620]">
                <div className="text-center">
                    <div className="text-sm uppercase tracking-widest">3D model</div>
                    <div className="text-lg font-semibold mt-2">Coming soon</div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative w-full h-full">
            <Canvas camera={{ position: [1.8, 1, 1.8], fov: 40 }} dpr={[1, 2]} gl={{ antialias: true, toneMapping: NeutralToneMapping }} >
                {/* Lighting knobs: raise/lower these if the model looks too dark/washed out. */}
                <StudioEnvironment intensity={0.6} />
                <directionalLight position={[4, 6, 4]} intensity={0.4} />

                <Suspense fallback={<Html fullscreen><ModelLoading /></Html>}>
                    <Model url={modelUrl} rotation={modelRotation} />
                </Suspense>

                <OrbitControls
                    enablePan={false}
                    enableZoom
                    enableDamping
                    dampingFactor={0.08}
                    minDistance={1.2}
                    maxDistance={5.5}
                />
            </Canvas>
        </div>
    );
}