import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './app.css';

import Header from "./components/Header";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from './pages/About';
import Contacts from './pages/Contacts';

function App() {
  const [language, setLanguage] = useState("Pt-br");
  const [theme, setTheme] = useState("dark")

  function toggleLanguage(language) {
    setLanguage(language === "Pt-br" ? "Pt-br" : "Eng-us")
  }

  function toggleTheme(theme) {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className={theme === "dark" ? "App" : "App App-Light"}>
      <Header 
        language={ language } 
        toggleLanguage={ toggleLanguage }
        toggleTheme={ toggleTheme }
        theme={ theme }
      />
        <Routes>
          <Route path="/" element={<Main theme={ theme }/>}>
            <Route index element={<Home language={ language }/>} />
            <Route path="projects" element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
