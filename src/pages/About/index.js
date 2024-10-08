/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import './about.css';

import Atribuitions from '../../components/Atribuitions';
import AboutTexts from './texts';

function About({ language }) {
  const Pt = AboutTexts['pt-br'];
  const Eng = AboutTexts['en-us'];

  return (
    <div className="About">
      <div className="About-Text">
        <h2>{language === 'Pt-br' ? Pt.title : Eng.title}</h2>
        <p>{language === 'Pt-br' ? Pt.textBlock1 : Eng.textBlock1}</p>
        <p>{language === 'Pt-br' ? Pt.textBlock2 : Eng.textBlock2}</p>
      </div>
      <div className="About-Atribuitions">
        <Atribuitions language={language} />
      </div>
    </div>
  );
}

export default About;

