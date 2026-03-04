import React, { useContext } from 'react';
import { Compass, Lightbulb, MessageSquare, Code } from 'lucide-react';
import './SuggestionGrid.css';
import { Context } from '../context/Context';

const SuggestionGrid = () => {
    const { onSent } = useContext(Context);

    const suggestions = [
        {
            text: "Suggest beautiful places to visit",
            icon: <Compass size={24} />,
        },
        {
            text: "Briefly summarize this concept: urban planning",
            icon: <Lightbulb size={24} />,
        },
        {
            text: "Brainstorm team bonding activities for our work retreat",
            icon: <MessageSquare size={24} />,
        },
        {
            text: "Improve the readability of the following code",
            icon: <Code size={24} />,
        }
    ];

    return (
        <div className="suggestion-grid">
            {suggestions.map((item, index) => (
                <div onClick={() => onSent(item.text)} key={index} className="suggestion-card">
                    <p className="suggestion-text">{item.text}</p>
                    <div className="suggestion-icon-wrapper">
                        {item.icon}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SuggestionGrid;
