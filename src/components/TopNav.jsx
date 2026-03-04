import React from 'react';
import './TopNav.css';

const TopNav = () => {
    return (
        <div className="topnav">
            <h1 className="brand-name">Bluff AI</h1>
            <div className="user-avatar">
                <img src="https://ui-avatars.com/api/?name=User&background=a46cfc&color=fff" alt="User Avatar" />
            </div>
        </div>
    );
};

export default TopNav;
