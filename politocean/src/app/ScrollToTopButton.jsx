'use client'
import { useEffect, useState } from 'react';

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
        setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return isVisible && (
        <button onClick={scrollToTop} className="fixed bottom-8 right-8 z-[998] rounded-full w-14 h-14 items-center justify-center bg-sea-light text-ocean-dark hover:bg-teal transition-colors shadow-lg" aria-label="Scroll to top">
            <span className='text-2xl leading-none'>↑</span>
        </button>
    );
}