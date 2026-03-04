import React, { useContext } from 'react';
import { Menu, Plus, MessageSquare, Sun, Moon, Settings } from 'lucide-react';
import './Sidebar.css';
import { Context } from '../context/Context';

const Sidebar = ({ isDarkMode, onThemeToggle, isSidebarOpen, onSidebarToggle }) => {
    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    };

    return (
        <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
            <div className="sidebar-top">
                <button className="menu-icon" onClick={onSidebarToggle}>
                    <Menu size={24} />
                </button>

                <button onClick={() => newChat()} className="new-chat-btn">
                    <Plus size={20} />
                    {isSidebarOpen && <span>New Chat</span>}
                </button>

                {isSidebarOpen && (
                    <div className="recent-section">
                        <h3 className="recent-title">Recent</h3>
                        {prevPrompts.map((item, index) => {
                            return (
                                <div onClick={() => loadPrompt(item)} className="recent-entry" key={index}>
                                    <MessageSquare size={20} />
                                    <p>{item.slice(0, 18)}...</p>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>

            <div className="sidebar-bottom">
                <button className="action-item" onClick={onThemeToggle}>
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    {isSidebarOpen && <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>}
                </button>

                <button className="action-item">
                    <Settings size={20} />
                    {isSidebarOpen && <span>Settings</span>}
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
