//CollectionCard.js

function CollectionCard({ headline, image1, image2, title, title2 }) {
  return (
    <article className="collectionContainer">
      <div className="collectionDiv1">
        <h1 className="collectionDiv1__headline">{headline}</h1>
        <img src={image1} alt="" className="collectionDiv1__image1" />
        <img src={image2} alt="" className="collectionDiv1__image2" />
      </div>
      <div className="collectionDiv2">
        <h2 className="collectionDiv2__title">{title}</h2>
        <h3 className="collectionDiv2__title2">{title2}</h3>
      </div>
    </article>
  );
}

export default CollectionCard;
