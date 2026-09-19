"use client";

import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo } from "react";

function Model({ url }) {
    const { scene } = useGLTF(url);
    const cloned = useMemo(() => scene.clone(), [scene]);
    return <primitive object={cloned} position={[0, -0.2, 0]} />;
}

export default function ModelViewer({ modelUrl }) {
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
            <Canvas camera={{ position: [2.2, 1.2, 2.2], fov: 40 }} dpr={[1, 2]} gl={{ antialias: true }} >
                <ambientLight intensity={0.45} />
                <directionalLight position={[4, 6, 4]} intensity={1.1} />
                <directionalLight position={[-4, 3, -2]} intensity={0.6} />

                <Suspense fallback={null}>
                    <Model url={modelUrl} />
                    <Environment preset="city" />
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