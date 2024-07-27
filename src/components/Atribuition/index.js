/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import './atribuition.css';

function Atribuition({
  logo,
  title,
  text,
  date,
  certificate,
  access,
  link,
  pdf,
}) {
  return (
    <div className="Atribuition">
      <div className="Atribuition-Img">
        <img src={logo} alt="logo" />
      </div>
      <div className="Atribuition-Text">
        <h3>{title}</h3>
        <p>{text}</p>
        <span>{date}</span>
        {certificate ? (
          <div className="Atribuition-Certificate">
            <a href={pdf} target="_blank" rel="noopener noreferrer">
              <img src={certificate} />
            </a>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {access}
            </a>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Atribuition;
