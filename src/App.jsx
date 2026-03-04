import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import WelcomeModal from './components/WelcomeModal';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import HeroSection from './components/HeroSection';
import SuggestionGrid from './components/SuggestionGrid';
import InputBar from './components/InputBar';
import Result from './components/Result';
import { Context } from './context/Context';

function App() {
  const { showResult } = useContext(Context);
  const [showModal, setShowModal] = useState(true);
  const [userName, setUserName] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, [isDarkMode]);

  const handleModalDismiss = (name) => {
    setUserName(name);
    setShowModal(false);
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="app-container">
      {showModal && <WelcomeModal onDismiss={handleModalDismiss} />}

      <Sidebar
        isDarkMode={isDarkMode}
        onThemeToggle={toggleTheme}
        isSidebarOpen={isSidebarOpen}
        onSidebarToggle={toggleSidebar}
      />

      <div className="main-content">
        <TopNav />
        {!showResult ? (
          <>
            <HeroSection userName={userName} />
            <SuggestionGrid />
          </>
        ) : (
          <Result />
        )}
        <div className="bottom-area">
          <InputBar />
        </div>
      </div>
    </div>
  );
}

export default App;
