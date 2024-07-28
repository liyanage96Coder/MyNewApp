import React from 'react';
import '../css/Footer.css';
import SocialMedia from './SocialMedia';

const Footer = () => (
    <footer className="footer">
        <p>&copy; 2024 Relax life Site. All rights reserved.</p>
        <p>Contact us: info@realxlife.com</p>
        <SocialMedia/>
    </footer>
);

export default Footer;