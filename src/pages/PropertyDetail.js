import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/PropertyDetail.css';

const properties = [
    // You would typically fetch this data from an API
    { id: 1, title: 'Luxury Villa', price: '$1,200,000', image: '/images/villa.jpg', description: 'A luxurious villa with stunning views.' },
    { id: 2, title: 'Modern Apartment', price: '$800,000', image: '/images/apartment.jpg', description: 'A modern apartment in the city center.' },
    { id: 3, title: 'Cozy Cottage', price: '$500,000', image: '/images/cottage.jpg', description: 'A cozy cottage perfect for a small family.' },
];

const PropertyDetail = () => {
    const { id } = useParams();
    const property = properties.find(p => p.id === parseInt(id));

    if (!property) return <p>Property not found.</p>;

    return (
        <div className="property-detail">
            <img src={property.image} alt={property.title} />
            <h1>{property.title}</h1>
            <p>{property.price}</p>
            <p>{property.description}</p>
        </div>
    );
};

export default PropertyDetail;