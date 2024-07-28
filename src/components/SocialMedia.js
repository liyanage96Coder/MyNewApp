import React from 'react';
import '../css/SocialMedia.css';
import { faFacebook,faInstagram,faLinkedin,faWhatsapp,faDiscord } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SocialLinks = () => {
    return (
        <ul className="social-links">
            <li className="link">
                <a href="#" className="icon" style={{ '--i': 'linear-gradient(to bottom right, #f9ce34, #ee2a7b, #6228d7)' }}>
                    <FontAwesomeIcon icon={faInstagram} className="fa-brands" size="1x" />
                </a>
            </li>
            <li className="link">
                <a href="#" className="icon" style={{ '--i': '#0073B2' }}>
                    <FontAwesomeIcon icon={faLinkedin} className="fa-brands" size="1x" />
                </a>
            </li>
            <li className="link">
                <a href="#" className="icon" style={{ '--i': '#0677E8' }}>
                 <FontAwesomeIcon icon={faFacebook} className="fa-brands" size="1x" />
                </a>
            </li>
            <li className="link">
                <a href="#" className="icon" style={{ '--i': '#25D366' }}>
                    <FontAwesomeIcon icon={faWhatsapp} className="fa-brands" size="1x" />
                </a>
            </li>
            <li className="link">
                <a href="#" className="icon" style={{ '--i': '#5765F2' }}>
                    <FontAwesomeIcon icon={faDiscord} className="fa-brands" size="1x" />
                </a>
            </li>
        </ul>
    );
};

export default SocialLinks;