import './top_header.css';

import GitHub from '../../assets/github_black.png';
import LinkedIn from '../../assets/linkedin_black.png';
import Email from '../../assets/email_black.png';
import WhatsApp from '../../assets/whats_black.png';
import BrFlag from '../../assets/pt_br.png';
import UsFlag from '../../assets/eng_us.png'

function TopHeader({ language, toggleLanguage, theme, toggleTheme }) {
    return (
        <div className={theme === "dark" ? "Top-Header" : "Top-Header Top-Light"}>
        <div className='Top-Content'>
          <div className='Top-Left'>
            <img src={ language === "Pt-br" ? BrFlag : UsFlag } />
            <p onClick={() => toggleLanguage("Pt-br")}>Pt</p>
            <p onClick={() => toggleLanguage("Eng-us")}>Eng</p>
          </div>
          <div className='Top-Right'>
            <a><img src={LinkedIn} /></a>
            <a><img src={GitHub} /></a>
            <a><img src={Email} /></a>
            <a><img src={WhatsApp} /></a>
            <input id='checkbox' type='checkbox' onClick={() => toggleTheme(theme)}/>
            <label htmlFor='checkbox' />
          </div>
        </div>
      </div>
    )
}

export default TopHeader;