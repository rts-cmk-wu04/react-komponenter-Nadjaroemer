//LatestNewsCard.js
import "./LatestNews.css";

function LatestNewsCard({ image, title, text, color }) {
  return (
    <aside className="latestNews">
      <img src={image} alt="" className="" />
      <div className="latestNews__titleText">
        <h1 className="" style={{ color: color }}>
          {title}
        </h1>
        <p className="">{text}</p>
      </div>
    </aside>
  );
}

export default LatestNewsCard;
