//TravelCard.js
import "./Travel.css";

function TravelCard({ image, category, title, description }) {
  return (
    <article className="travelCardContainer">
      <div className="travelCard">
        <img src={image} alt="" className="travelCard__image" />
        <p className="travelCard__category">{category}</p>
        <h1 className="travelCard__title">{title}</h1>
        <p className="travelCard__text">{description}</p>
      </div>
    </article>
  );
}

export default TravelCard;
