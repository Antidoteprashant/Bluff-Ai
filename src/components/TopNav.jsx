import React from 'react';
import { User } from 'lucide-react';
import './TopNav.css';

const TopNav = () => {
    return (
        <div className="topnav">
            <h1 className="brand-name">Bluff AI</h1>
            <div className="user-profile-icon">
                <User size={20} className="icon" />
            </div>
        </div>
    );
};

export default TopNav;
