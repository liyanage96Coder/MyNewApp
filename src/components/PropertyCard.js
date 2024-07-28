import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../css/PropertyCard.css';

const PropertyCard = ({ property }) => (
    <motion.div
        className="property-card"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
    >
        <img src={property.image} alt={property.title} />
        <h3>{property.title}</h3>
        <p>{property.price}</p>
        <Link to={`/properties/${property.id}`}>View Details</Link>
    </motion.div>
);

export default PropertyCard;