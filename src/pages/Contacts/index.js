/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import './contacts.css';

import email from '../../assets/email_black.png';
import github from '../../assets/github_black.png';
import linkedIn from '../../assets/linkedin_black.png';
import whatsapp from '../../assets/whats_black.png';
import links from '../../components/links';


function Contacts() {
  return (
    <div className="Contact">
      <div className='Contact-Content'>
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
        <div className='Contact-Div'>
          <img src={linkedIn} />
             <h3>LinkedIn</h3>
        </div>
        </a>
        <a href={links.github} target="_blank" rel="noopener noreferrer">
        <div className='Contact-Div'>
          <img src={github} />
          <h3>GitHub<br />github.com/johnovelli</h3>
        </div>
        </a>
        <a href={links.email} target="_blank" rel="noopener noreferrer">
        <div className='Contact-Div'>
          <img src={email} />
          <h3>Email<br />joh.novelli90@gmail</h3>
        </div>
        </a>
        <a href={links.whatsapp} target="_blank" rel="noopener noreferrer">
        <div className='Contact-Div'>
          <img src={whatsapp} />
          <h3>WhastApp<br />{`(+55 11 99865-3311)`}</h3>
        </div>
        </a>
      </div>
    </div>
  );
}

export default Contacts;
