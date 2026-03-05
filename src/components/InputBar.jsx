import React, { useContext, useState, useRef } from 'react';
import { Mic, Send, MicOff } from 'lucide-react';
import './InputBar.css';
import { Context } from '../context/Context';

const InputBar = () => {
    const { onSent, input, setInput } = useContext(Context);
    const [isListening, setIsListening] = useState(false);
    const recognitionRef = useRef(null);
    const inputPrefixRef = useRef("");

    const toggleListening = () => {
        if (isListening) {
            if (recognitionRef.current) {
                recognitionRef.current.stop();
            }
            setIsListening(false);
            return;
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert('Speech recognition is not supported in this browser.');
            return;
        }

        if (!recognitionRef.current) {
            const recognition = new SpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;
            // Set language to Indian English for better English/Hindi pronunciation support
            recognition.lang = 'en-IN';

            recognition.onresult = (event) => {
                let currentTranscript = '';
                for (let i = 0; i < event.results.length; i++) {
                    currentTranscript += event.results[i][0].transcript;
                }
                console.log("Transcribed speech:", currentTranscript);
                setInput(inputPrefixRef.current + currentTranscript);
            };

            recognition.onerror = (event) => {
                console.error("Speech recognition error:", event.error);
                if (event.error === 'not-allowed') {
                    alert("Microphone access blocked. Please click the lock icon in your browser's address bar and allow microphone permissions.");
                } else if (event.error !== 'no-speech') {
                    console.log("Speech error details:", event.error);
                }
                setIsListening(false);
            };

            recognition.onend = () => {
                console.log("Speech recognition ended");
                setIsListening(false);
            };

            recognitionRef.current = recognition;
        }

        inputPrefixRef.current = input ? input + " " : "";
        try {
            recognitionRef.current.start();
            setIsListening(true);
        } catch (e) {
            console.error(e);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && input) {
            if (isListening && recognitionRef.current) {
                recognitionRef.current.stop();
                setIsListening(false);
            }
            onSent();
        }
    };

    const handleSend = () => {
        if (isListening && recognitionRef.current) {
            recognitionRef.current.stop();
            setIsListening(false);
        }
        onSent();
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
                    <button
                        className={`icon-btn ${isListening ? 'listening' : ''}`}
                        onClick={toggleListening}
                    >
                        {isListening ? <MicOff size={20} /> : <Mic size={20} />}
                    </button>
                    {input ? (
                        <button className="icon-btn" onClick={handleSend}>
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
