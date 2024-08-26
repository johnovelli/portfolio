/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Atribuition from '../Atribuition';
import './atribuitions.css';
import AtribuitionsTexts from './texts';

function Atribuitions({ language }) {
  const [showAllCertifications, setShowAllCertifications] = useState(false);

  const access =
    language === 'Pt-br' ? 'Acesse o certificado' : 'Access the certificate';

  const trybe =
    language === 'Pt-br'  ? AtribuitionsTexts.trybept : AtribuitionsTexts.trybeeng;

  const university =
    language === 'Pt-br' ? AtribuitionsTexts.anhembipt : AtribuitionsTexts.anhembieng;

  const enligsh =
    language === 'Pt-br' ? AtribuitionsTexts.englishpt  : AtribuitionsTexts.englisheng;

  const java = AtribuitionsTexts.java

  const fullstack =
    language === 'Pt-br' ? AtribuitionsTexts.fullstackpt : AtribuitionsTexts.fullstackeng;

  const backend =
    language === 'Pt-br' ? AtribuitionsTexts.backendpt : AtribuitionsTexts.backendeng;

  const frontend =
    language === 'Pt-br' ? AtribuitionsTexts.frontendpt : AtribuitionsTexts.frontendeng;

  const pcscience =
    language === 'Pt-br' ? AtribuitionsTexts.pcsciencept : AtribuitionsTexts.pcscienceeng;

  const formations = [trybe, university, enligsh];
  const certifications = [ fullstack, java, backend, frontend, pcscience];

  const visibleCertifications = showAllCertifications
    ? certifications
    : certifications.slice(0, 2);

  const toggleShowAllCertifications = () => {
    setShowAllCertifications(!showAllCertifications);
  };

  return (
    <div className="Atribuitions">
      <h2>{language === 'Pt-br' ? 'Formação' : 'Education'}</h2>
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
        <h2>{language === 'Pt-br' ? 'Certificados' : 'Certifications'}</h2>
        {visibleCertifications.map((certificate, index) => (
          <Atribuition
            key={index}
            logo={certificate.logo}
            title={certificate.title}
            text={certificate.text}
            certificate={certificate.certificate}
            access={access}
            link={certificate.link}
            pdf={certificate.pdf}
          />
        ))}
        {certifications.length > 2 && (
          <button onClick={toggleShowAllCertifications} className="ShowMore">
            {showAllCertifications
              ? language === 'Pt-br'
                ? 'Ver menos'
                : 'Less'
              : language === 'Pt-br'
                ? 'Ver mais'
                : 'More'}
          </button>
        )}
      </div>
    </div>
  );
}

export default Atribuitions;
