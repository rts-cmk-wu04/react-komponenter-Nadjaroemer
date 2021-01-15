//MustSeePlacesCard.js
import "./MustSeePlaces.css";

function MustSeePlacesCard({ title, image1, image2, image3, headline, text }) {
  return (
    <>
      <p className="mustSeePlaces__title">{title}</p>
      <img src={image1} alt="" className="mustSeePlaces__logo" />
      <img src={image2} alt="" className="mustSeePlaces__summer" />
      <img src={image3} alt="" className="mustSeePlaces__heart" />
      <div className="mustSeePlaces__headline">
        <h1 className="mustSeePlaces__h1">{headline}</h1>
        <p className="mustSeePlaces__text">{text}</p>
      </div>
    </>
  );
}

export default MustSeePlacesCard;
