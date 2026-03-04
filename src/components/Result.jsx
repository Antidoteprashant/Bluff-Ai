import React, { useContext } from 'react';
import './Result.css';
import { Context } from '../context/Context';
import { Sparkles, User } from 'lucide-react';

const Result = () => {
    const { recentPrompt, showResult, loading, resultData } = useContext(Context);

    if (!showResult) return null;

    return (
        <div className="result-container">
            <div className="result-prompt">
                <div className="user-icon">
                    <User size={20} />
                </div>
                <p>{recentPrompt}</p>
            </div>

            <div className="result-data">
                <div className="ai-icon">
                    <Sparkles size={20} className="sparkle-icon" />
                </div>
                {loading ? (
                    <div className="loader">
                        <hr />
                        <hr />
                        <hr />
                    </div>
                ) : (
                    <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
            </div>
        </div>
    );
};

export default Result;
