import ServicesCard from "./ServicesCard";
import Transition from "../layout/Transition";
import auditImg from "../icons/services-section/Audit & Conseil.png";
import geneImg from "../icons/services-section/Génie Logiciel.png";
import ReseImg from "../icons/services-section/Réseau IT.png";
import secuImg from "../icons/services-section/Sécurité IT.png";

export default function Services() {
  const cardItems = [
    {
      title: "Génie Logiciel",
      content:
        "Analyse des besoins – Conception – Construction – Tests – Maintenance – Gestion de projets",
      icon: <img src={geneImg} alt="" className="services-card-icon " />,
    },
    {
      title: "Audit et Conseil",
      content:
        "Nous proposons notre expérience et nos services de consultation aux startups et entreprises.",
      icon: <img src={auditImg} alt="" className="services-card-icon " />,
    },
    {
      title: "Sécurité informatique",
      content:
        "Nous offrons une solution complète en matière de sécurité informatique, Firewall/parefeu, certificats SSL ..etc",
      icon: <img src={secuImg} alt="" className="services-card-icon " />,
    },
    {
      title: "Réseau informatique",
      content:
        "Edraak offre un service complet pour votre infrastructure réseau informatique, téléphonique et serveurs",
      icon: <img src={ReseImg} alt="" className="services-card-icon " />,
    },
  ];

  return (
    <div className="services section" id="services">
      <h2>
        <span>SERVICES</span>
      </h2>
      <Transition className="cards-container">
        {cardItems.map((item) => (
          <ServicesCard
            key={item.title}
            title={item.title}
            content={item.content}
            icon={item.icon}
          />
        ))}
      </Transition>
    </div>
  );
}
