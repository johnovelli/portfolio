import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './app.css';

import Header from './components/Header';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Main from './pages/Main';
import Projects from './pages/Projects';

function App() {
  const [language, setLanguage] = useState('Pt-br');
  const [theme, setTheme] = useState('light');

  function toggleLanguage(language) {
    setLanguage(language === 'Pt-br' ? 'Pt-br' : 'Eng-us');
  }

  function toggleTheme(theme) {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <div className={theme === 'dark' ? 'App' : 'App App-Light'}>
      <Header
        language={language}
        toggleLanguage={toggleLanguage}
        toggleTheme={toggleTheme}
        theme={theme}
      />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home language={language} />} />
          <Route path="about" element={<About language={language} />} />
          <Route path="projects" element={<Projects language={language} />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
