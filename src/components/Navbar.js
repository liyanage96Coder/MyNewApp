import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import { motion } from 'framer-motion';
const Navbar = () => {
    useEffect(() => {
        let buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            let text = button.textContent;
            button.innerHTML = '';

            for (let char of text) {
                let span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char;
                button.appendChild(span);
            }

            let spans = button.querySelectorAll('span');

            button.addEventListener('mouseenter', () => {
                spans.forEach((span, index) => {
                    setTimeout(() => {
                        span.classList.add('hover');
                    }, index * 50);
                });
            });

            button.addEventListener('mouseleave', () => {
                spans.forEach((span, index) => {
                    setTimeout(() => {
                        span.classList.remove('hover');
                    }, index * 50);
                });
            });
        });
    }, []);

    return (
        <div>
            <nav className="navbar">
                <ul>
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <li><Link to="/"><button className="btn" style={{ '--clr': '#007bff' }}>Home</button></Link></li>
                </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <li><Link to="/properties"> <button className="btn" style={{ '--clr': '#ff0055' }}>Properties</button></Link></li>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <li><Link to="/about"><button className="btn" style={{ '--clr': '#b731e5' }}>About Us</button></Link></li>
                </motion.li>
                </ul>
            </nav>

        </div>
    );
}

export default Navbar;