//ServicesCard.js
import "./Services.css";

function ServicesCard({ title, image, text }) {
  return (
    <article className="servicesContainer">
      <div className="services">
        <img src={image} alt="" className="services_image" />
        <h1 className="services__title">{title}</h1>
        <p className="services__text">{text}</p>
      </div>
    </article>
  );
}

export default ServicesCard;
