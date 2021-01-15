//NewsDigestCard.js

import "./NewsDigest.css";

function NewsDigestCard({ image, title, text }) {
  return (
    <article className="newsDigest">
      <img src={image} alt="" className="" />
      <h2 className="newsDigest__h2">{title}</h2>
      <p className="newsDigest__text">{text}</p>
    </article>
  );
}

export default NewsDigestCard;
