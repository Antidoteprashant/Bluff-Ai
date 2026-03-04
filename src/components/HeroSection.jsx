import React from 'react';
import './HeroSection.css';

const HeroSection = ({ userName }) => {
    const displayName = userName ? userName : 'User';

    return (
        <div className="hero-section">
            <h1 className="hero-greeting">
                Hello, <span className="gradient-text">{displayName}</span>...
            </h1>
            <h2 className="hero-question">
                How can I help you today?
            </h2>
        </div>
    );
};

export default HeroSection;
