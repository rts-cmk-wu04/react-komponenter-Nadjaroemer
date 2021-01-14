import "./DesignEducation.css";

function DesignEducationCard({ image, title, color }) {
  return (
    <div className="designEducation" style={{ backgroundColor: color }}>
      <img src={image} alt="" className="designEducation__Icon" />
      <h1 className="designEducation__title">{title}</h1>
    </div>
  );
}

export default DesignEducationCard;
