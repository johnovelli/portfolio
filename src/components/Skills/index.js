/* eslint-disable react/react-in-jsx-scope */
import './skills.css';

import JavascriptLogo from '../../assets/JS-logo.png';
import JavaLogo from '../../assets/JV-logo.png';
import NodeLogo from '../../assets/ND-logo.png';
import ReactLogo from '../../assets/RT-logo.png';
import SpringLogo from '../../assets/SP-logo.png';
import TypescriptLogo from '../../assets/TS-logo.png';

function Skills() {
  return (
    <div className="Skills">
      <img src={JavascriptLogo} alt="Javascript Logo" />
      <img src={TypescriptLogo} alt="Typescript Logo" />
      <img src={ReactLogo} alt="React Logo" />
      <img src={NodeLogo} alt="Node Logo" />
      <img src={JavaLogo} alt="Java Logo" />
      <img src={SpringLogo} alt="Spring Logo" />
    </div>
  );
}

export default Skills;
