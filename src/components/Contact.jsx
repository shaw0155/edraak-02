import ContactForm from "./ContactForm";
import Transition from "../layout/Transition";
import addressImg from "../icons/contact-section/Adresse.png";
import emailImg from "../icons/contact-section/Email.png";
import telImg from "../icons/contact-section/Telephone.png";

export default function Contact() {
  const cardItems = [
    {
      title: "Téléphone",
      content: "+213 660 977 477",
      icon: <img src={telImg} alt="" />,
      href: "tel:+213660977477",
    },
    {
      title: "Email",
      content: "contact@edraak.io",
      icon: <img src={emailImg} alt="" />,
      href: "mailto:contact@edraak.io",
    },
    {
      title: "Address",
      content: "488 El Fedj Ain el bey, Constantine - alger",
      icon: <img src={addressImg} alt="" />,
      href: "https://www.google.com/maps/search/cit%C3%A9+les+bananiers+b%C3%A2timent+C37+N+01+El+Mohammadia+-+alger/@36.7318417,3.1594598,2734m/data=!3m2!1e3!4b1?hl=fr&entry=ttu",
    },
  ];

  return (
    <div className="contact section" id="contact">
      <h2>
        <span>NOUS CONTACTER</span>
      </h2>
      <Transition className="contact-sides">
        <div className="contact-sides-left">
          {cardItems.map((item) => (
            <a key={item.title} href={item.href} className="contact-card">
              {item.icon}
              <div>
                <h4>{item.title}</h4>
                <p>{item.content}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="contact-sides-right">
          <ContactForm />
        </div>
      </Transition>
    </div>
  );
}
