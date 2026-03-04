import React, { useContext } from 'react';
import { Mic, Send } from 'lucide-react';
import './InputBar.css';
import { Context } from '../context/Context';

const InputBar = () => {
    const { onSent, input, setInput } = useContext(Context);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && input) {
            onSent();
        }
    };

    return (
        <div className="input-container-wrapper">
            <div className="input-container">
                <input
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    value={input}
                    placeholder="Enter a prompt here..."
                    className="chat-input"
                />
                <div className="input-actions">
                    <button className="icon-btn">
                        <Mic size={20} />
                    </button>
                    {input ? (
                        <button className="icon-btn" onClick={() => onSent()}>
                            <Send size={20} />
                        </button>
                    ) : null}
                </div>
            </div>
            <p className="disclaimer">
                © Bluff AI may display inaccurate info, including about people, so double check its responses.
            </p>
        </div>
    );
};

export default InputBar;
