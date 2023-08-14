import Transition from "../layout/Transition";
import cLogo from "../icons/about-section/C++.png";
import dbLogo from "../icons/about-section/Database.png";
import javaLogo from "../icons/about-section/JAVA.png";
import jsLogo from "../icons/about-section/JS.png";
import nodeLogo from "../icons/about-section/Node.png";
import phpLogo from "../icons/about-section/PHP.png";
import PythonLogo from "../icons/about-section/Python.png";
import sqlLogo from "../icons/about-section/SQL.png";

const icons = [
  cLogo,
  dbLogo,
  javaLogo,
  jsLogo,
  nodeLogo,
  phpLogo,
  PythonLogo,
  sqlLogo,
];

export default function About() {
  return (
    <div className="about  section" id="techs">
      <Transition className="about-part">
        <h2>
          <span>QUI SOMMES NOUS ?</span>
        </h2>
        <p>
          Une Société de Services en Ingénierie Informatique dont les valeurs
          sont : professionnalisme, considération et respect des engagements.{" "}
          <br />
          Nous proposons des solutions sur-mesure dans le domaine des
          Technologies de l’information et de la communication.
        </p>
      </Transition>
      <Transition className="about-part">
        <h2>
          <span>Notre SDK</span>
        </h2>
        <div className="about-part-icons-container">
          {icons.map((item) => (
            <img
              key={`${item}+014`}
              src={item}
              alt=""
              className="about-part-icons-container-icon"
            />
          ))}
        </div>
      </Transition>
    </div>
  );
}
