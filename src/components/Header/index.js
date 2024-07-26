/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import './header.css';

import TopHeader from '../TopHeader';

function Header({ language, toggleLanguage, theme, toggleTheme }) {
  return (
    <header>
      <TopHeader
        language={language}
        toggleLanguage={toggleLanguage}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <div className={theme === 'dark' ? 'Header' : 'Header Header-Light'}>
        <div className="Header-Content">
          <div className="Header-Name">
            <h1>
              Joh
              <br />
              Novelli
            </h1>
          </div>
          <nav className="Header-Nav">
            <ul className="Nav-Links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/projects">
                  {language === 'Pt-br' ? 'Projetos' : 'Projects'}
                </a>
              </li>
              <li>
                <a href="/about">
                  {language === 'Pt-br' ? 'Sobre Mim' : 'About Me '}
                </a>
              </li>
              <li>
                <a href="/contacts">
                  {' '}
                  {language === 'Pt-br' ? 'Contatos' : 'Contacts'}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <hr
        className={theme === 'dark' ? 'Header-Hr' : 'Header-Hr Header-Hr-Light'}
      />
    </header>
  );
}

export default Header;
