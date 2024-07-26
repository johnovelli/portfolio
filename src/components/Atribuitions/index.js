/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import './atribuitions.css';

import Atribuition from '../Atribuition';
import AtribuitionsTexts from './texts';

function Atribuitions({ language }) {
  const access =
    language === 'Pt-br' ? 'Acesse o certificado' : 'Access the certificate';

  const university =
    language === 'Pt-br'
      ? AtribuitionsTexts.anhembipt
      : AtribuitionsTexts.anhembieng;

  const enligsh =
    language === 'Pt-br'
      ? AtribuitionsTexts.englishpt
      : AtribuitionsTexts.englisheng;

  const frontend =
    language === 'Pt-br'
      ? AtribuitionsTexts.frontendpt
      : AtribuitionsTexts.frontendeng;

  const backend =
    language === 'Pt-br'
      ? AtribuitionsTexts.backendpt
      : AtribuitionsTexts.backendeng;

  const pcscience =
    language === 'Pt-br'
      ? AtribuitionsTexts.pcsciencept
      : AtribuitionsTexts.pcscienceeng;

  const formations = [university, enligsh];
  const certifications = [frontend, backend, pcscience];

  return (
    <div className="Atribuitions">
      <h2>
        {language === 'Pt-br' ? 'Formação acadêmica' : 'Academic Education'}
      </h2>
      {formations.map((formation, index) => (
        <Atribuition
          key={index}
          logo={formation.logo}
          title={formation.title}
          text={formation.text}
          date={formation.date}
        />
      ))}
      <div className="Licenses">
        <h2>
          {language === 'Pt-br'
            ? 'Licenças e certificados'
            : 'Licenses and Certifications'}
        </h2>
        {certifications.map((certificate, index) => (
          <Atribuition
            key={index}
            logo={certificate.logo}
            title={certificate.title}
            text={certificate.text}
            date={certificate.date}
            certificate={certificate.certificate}
            access={access}
            link={certificate.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Atribuitions;
