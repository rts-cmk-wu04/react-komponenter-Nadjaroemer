//ServicesCard.js
import "./Services.css";

function ServicesCard({ title, image, text, color }) {
  return (
    <div className="services" style={{ backgroundColor: color }}>
      <img src={image} alt="" className="services__image" />
      <h1 className="services__title">{title}</h1>
      <p className="services__text">{text}</p>
    </div>
  );
}

export default ServicesCard;
