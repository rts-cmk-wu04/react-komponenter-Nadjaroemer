//TheNewYorktTimes.js
import "./TheNewYorkTimes.css";

function TheNewYorkTimesCard({ image, title, text, button, backgroundImage }) {
  return (
    <article className="newyorktimes">
      <img src={image} alt="" className="newyorktimes__logo" />
      <h1 className="newyorktimes__title">{title}</h1>
      <p className="newyorktimes__text">{text}</p>
      <button className="newyorktimes__button">{button}</button>
      <img
        src={backgroundImage}
        alt=""
        className="newyorktimes__backgoundImage"
      />
    </article>
  );
}

export default TheNewYorkTimesCard;
