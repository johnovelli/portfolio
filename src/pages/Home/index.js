import "./home.css";

import HomeTexts from "./texts";
import BtnBlue from "../../components/BtnBlue";
import Skills from "../../components/Skills";
import Foto from "../../assets/joh_picture.jpg";
import Projects from "../Projects";
import About from "../About";

function Home({ language }) {
  const Pt = HomeTexts["pt-br"];
  const Eng = HomeTexts["en-us"];

  return (
    <div>
      <div className="Home">
        <div className="Home-Text">
          <h2>{language === "Pt-br" ? Pt.greeting : Eng.greeting}</h2>
          <p>{language === "Pt-br" ? Pt.introduction : Eng.introduction}</p>
          <div className="Home-Btns">
            <BtnBlue name="LinkedIn" link="youtube.com" />
            <BtnBlue name="GitHub" link="youtube.com" />
          </div>
          <Skills />
        </div>
        <div className="Home-Img">
          <img src={Foto} alt="Foto pessoal" />
        </div>
      </div>
      <h1 className="Section-Name">{language === "Pt-br" ? "Projetos" : "Projects"}</h1>
      <Projects language={ language }/>
      <h1 className="Section-Name">{language === "Pt-br" ? "Sobre Mim" : "About Me"}</h1>
      <About language={ language }/>
    </div>
  );
}

export default Home;
