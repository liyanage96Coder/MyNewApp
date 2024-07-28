import React from 'react';
import PropertyCard from '../components/PropertyCard';
import '../css/PropertyList.css';

const properties = [
    // You would typically fetch this data from an API
    { id: 1, title: 'Luxury Villa', price: '$1,200,000', image: '/images/villa.jpg' },
    { id: 2, title: 'Modern Apartment', price: '$800,000', image: '/images/apartment.jpg' },
    { id: 3, title: 'Cozy Cottage', price: '$500,000', image: '/images/cottage.jpg' },
];

const PropertyList = () => (
    <div className="property-list">
        <h1>All Properties</h1>
        <div className="property-grid">
            {properties.map(property => (
                <PropertyCard key={property.id} property={property} />
            ))}
        </div>
    </div>
);

export default PropertyList;