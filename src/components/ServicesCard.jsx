export default function ServicesCard(props) {
  return (
    <div className="services-card">
      <h4 className="services-card-title">{props.title}</h4>
      <p className="services-card-content">{props.content}</p>
      {props.icon}
    </div>
  );
}
