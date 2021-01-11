function Card({ title, image, text, color }) {
  return (
    <article style={{ backgroundColor: color }}>
      <h1>{title}</h1>
      <img src={image} alt="" />
      <p>{text}</p>
    </article>
  );
}

export default Card;
