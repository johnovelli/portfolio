/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import './top_header.css';

import Email from '../../assets/email_black.png';
import UsFlag from '../../assets/eng_us.png';
import GitHub from '../../assets/github_black.png';
import LinkedIn from '../../assets/linkedin_black.png';
import BrFlag from '../../assets/pt_br.png';
import WhatsApp from '../../assets/whats_black.png';
import links from '../links';

function TopHeader({ language, toggleLanguage, theme, toggleTheme }) {
  return (
    <div className={theme === 'dark' ? 'Top-Header' : 'Top-Header Top-Light'}>
      <div className="Top-Content">
        <div className="Top-Left">
          <img src={language === 'Pt-br' ? BrFlag : UsFlag} />
          <p onClick={() => toggleLanguage('Pt-br')}>Pt</p>
          <p onClick={() => toggleLanguage('Eng-us')}>Eng</p>
        </div>
        <div className="Top-Right">
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} />
          </a>
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            <img src={GitHub} />
          </a>
          <a href={links.email} target="_blank" rel="noopener noreferrer">
            <img src={Email} />
          </a>
          <a href={links.whatsapp} target="_blank" rel="noopener noreferrer">
            <img src={WhatsApp} />
          </a>
          <input
            id="checkbox"
            type="checkbox"
            onClick={() => toggleTheme(theme)}
          />
          <label htmlFor="checkbox" />
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
