import React from 'react';
import HeroSection from '../components/HeroSection';
import PropertyCard from '../components/PropertyCard';
import '../css/Home.css';

const properties = [
    { id: 1, title: 'Explore a New City', price: '$1,200,000', image: '/images/villa.jpg' },
    { id: 2, title: 'Climb a Mountain', price: '$800,000', image: '/images/apartment.jpg' },
    { id: 3, title: 'Enjoy Wildlife', price: '$500,000', image: '/images/cottage.jpg' },
    { id: 4, title: 'Try New Foods', price: '$500,000', image: '/images/cottage.jpg' },
];

const Home = () =>
     (

    <div>
        <video className="background-video" autoPlay loop muted>
            <source src="/videos/background-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <HeroSection />
        <section className="property-list">
            <h2 className='topic'>Feeling overwhelmed? Try something New</h2>
            <div className="property-grid">
                {properties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
        </section>
    </div>
);

export default Home;