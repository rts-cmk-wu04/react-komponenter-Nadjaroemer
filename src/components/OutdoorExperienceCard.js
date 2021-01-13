//OutdoorExperienceCard.js
import "./OutdoorExperience.css";

function OutdoorExperienceCard({
  image1,
  image2,
  image3,
  image4,
  title,
  link,
  text,
}) {
  return (
    <div className="outdoorExperienceContainer">
      <img src={image1} alt="" className="outdoorExperience__image1" />
      <div className="outdoorExperience">
        <div className="outdoorExperienceImages">
          <img
            src={image2}
            alt=""
            className="outdoorExperienceImages__image2"
          />
          <img
            src={image3}
            alt=""
            className="outdoorExperienceImages__image3"
          />
          <img
            src={image4}
            alt=""
            className="outdoorExperienceImages__image4"
          />
        </div>
        <button className="outdoorExperience__link">{link}</button>
        <h1 className="outdoorExperience__title">{title}</h1>
        <p className="outdoorExperience__text">{text}</p>
      </div>
    </div>
  );
}

export default OutdoorExperienceCard;
