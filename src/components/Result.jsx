import React, { useContext, useEffect, useRef } from 'react';
import './Result.css';
import { Context } from '../context/Context';
import { Sparkles, User } from 'lucide-react';

const Result = () => {
    const { showResult, loading, resultData, messages } = useContext(Context);
    const scrollRef = useRef();

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, resultData, loading]);

    if (!showResult) return null;

    return (
        <div className="result-container" ref={scrollRef}>
            {messages.map((msg, index) => (
                <div key={index} className={`message-wrapper ${msg.role}`}>
                    <div className={`message-entry ${msg.role === 'user' ? 'result-prompt' : 'result-data'}`}>
                        <div className={`${msg.role}-icon`}>
                            {msg.role === 'user' ? <User size={20} /> : <Sparkles size={20} className="sparkle-icon" />}
                        </div>
                        {msg.role === 'user' ? (
                            <p>{msg.content}</p>
                        ) : (
                            <p dangerouslySetInnerHTML={{ __html: msg.content }}></p>
                        )}
                    </div>
                </div>
            ))}

            {loading && (
                <div className="message-wrapper model">
                    <div className="message-entry result-data">
                        <div className="ai-icon">
                            <Sparkles size={20} className="sparkle-icon" />
                        </div>
                        {resultData ? (
                            <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                        ) : (
                            <div className="loader">
                                <hr />
                                <hr />
                                <hr />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Result;
