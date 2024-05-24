import React, { useState, useEffect } from 'react';
import './ScrollToTheTop.css';

const ScrollToTheTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const headerHeight = window.innerHeight * 0.5; // 50% of screen height
        const scrollPosition = window.scrollY;

        if (scrollPosition > headerHeight) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        isVisible && (
            <button onClick={scrollToTop} className="scroll-to-top-button">
                &#8679;
            </button>
        )
    );
};

export default ScrollToTheTop;
