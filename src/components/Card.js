import "./Architecture.css";

function Card({ title, image, text, color }) {
  return (
    <article className="architectureContainer">
      <div className="architecture">
        <h1 className="architecture__title" style={{ color: color }}>
          {title}
        </h1>
        <img src={image} alt="" className="architecture__image" />
        <p className="architecture__text">{text}</p>
      </div>
    </article>
  );
}

export default Card;
