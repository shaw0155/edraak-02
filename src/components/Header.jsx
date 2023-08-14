import Transition from "../layout/Transition";

export default function Header() {
  return (
    <div className="header" id="home">
      <Transition className="header-content">
        <h1>
          <span> DES SOLUTION</span>
          <br />
          INFORMATIQUES
        </h1>
        <h3> Au services des Professionnels</h3>
        <a href="#contact" className="header-content-link ">
          PLUS
        </a>
      </Transition>
    </div>
  );
}
