import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../css/HeroSection.css';

const HeroSection = () => {
    useEffect(() => {
        const syncPointer = ({ x: pointerX, y: pointerY }) => {
            const x = pointerX.toFixed(2);
            const y = pointerY.toFixed(2);
            const xp = (pointerX / window.innerWidth).toFixed(2);
            const yp = (pointerY / window.innerHeight).toFixed(2);
            document.documentElement.style.setProperty('--x', x);
            document.documentElement.style.setProperty('--xp', xp);
            document.documentElement.style.setProperty('--y', y);
            document.documentElement.style.setProperty('--yp', yp);
        };
        document.body.addEventListener('pointermove', syncPointer);

        // Clean up event listener on component unmount
        return () => {
            document.body.removeEventListener('pointermove', syncPointer);
        };
    }, []);

    return (
        <motion.header
            className="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="hero-content">
                <h1 className='main-topic'>Your Dream Home Awaits</h1>
                <p>Find The Perfect Solution To Relax Your Mind And Body With Us.</p>
                <button className='explore-button'>Explore Now</button>
            </div>
        </motion.header>
    );
}

export default HeroSection;