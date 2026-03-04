import React, { useState } from 'react';
import { Smile, Rocket } from 'lucide-react';
import './WelcomeModal.css';

const WelcomeModal = ({ onDismiss }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onDismiss(name);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Welcome to Bluff AI !!</h2>
        <p className="modal-description">
          You might be wondering, why the name "Bluff AI"?... Well, because it's not a real AI.
          I just gave it a Gemini API key and said, 'Go act smart!' <Smile size={20} style={{ verticalAlign: 'middle', marginLeft: '4px' }} />
        </p>

        <form onSubmit={handleSubmit} className="modal-form">
          <input
            type="text"
            placeholder="Enter your name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="modal-input"
          />
          <button type="submit" className="modal-button" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            Let's Chat! <Rocket size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default WelcomeModal;
