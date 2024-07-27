/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import './home.css';

import Foto from '../../assets/joh_picture.jpg';
import BtnBlue from '../../components/BtnBlue';
import links from '../../components/links';
import Skills from '../../components/Skills';
import About from '../About';
import Contacts from '../Contacts';
import Projects from '../Projects';
import HomeTexts from './texts';

function Home({ language }) {
  const languageInfo =
    language === 'Pt-br' ? HomeTexts['pt-br'] : HomeTexts['en-us'];

  return (
    <div>
      <div className="Home">
        <div className="Home-Text">
          <h2>{languageInfo.greeting}</h2>
          <p>{languageInfo.introduction}</p>
          <div className="Home-Btns">
            <BtnBlue name="LinkedIn" link={links.linkedin} />
            <BtnBlue name="GitHub" link={links.github} />
          </div>
          <Skills />
        </div>
        <div className="Home-Img">
          <img src={Foto} alt="Foto pessoal" />
        </div>
      </div>
      <h1 className="Section-Name">
        {language === 'Pt-br' ? 'Sobre Mim' : 'About Me'}
      </h1>
      <About language={language} />
      <h1 className="Section-Name">
        {language === 'Pt-br' ? 'Projetos' : 'Projects'}
      </h1>
      <Projects language={language} />
      <h1 className="Section-Name">
        {language === 'Pt-br' ? 'Contatos' : 'Contacts'}
      </h1>
      <Contacts />
    </div>
  );
}

export default Home;
