"use client";
import { TransitionRouter } from 'next-transition-router';
import WaveOverlay from './WaveOverlay';

export default function ClientWrapper({ children }) {
    return (
        <TransitionRouter auto leave={async (next) => { await new Promise(resolve => setTimeout(resolve, 700)); next(); }} enter={async (next) => { await new Promise(resolve => setTimeout(resolve, 450)); next(); }}>
            {children}
            <WaveOverlay />
        </TransitionRouter>
    );
}