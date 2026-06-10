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
        <button onClick={scrollToTop} className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[998] rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-sea-light text-ocean-dark hover:bg-teal transition-colors shadow-lg" aria-label="Scroll to top">
            <span className='text-2xl leading-none'>↑</span>
        </button>
    );
}