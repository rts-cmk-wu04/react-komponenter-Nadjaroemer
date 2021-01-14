//LatestNewsCard.js
import "./LatestNews.css";

function LatestNewsCard({ image, title, text, color }) {
  return (
    <aside className="latestNews">
      <img src={image} alt="" className="" />
      <div className="latestNews__titleText">
        <h1 className="latestNews__title" style={{ color: color }}>
          {title}
        </h1>
        <p className="latestNews__text">{text}</p>
      </div>
    </aside>
  );
}

export default LatestNewsCard;
