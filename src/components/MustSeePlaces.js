//MustSeePlaces.js
import { useEffect, useState } from "react";
//import MustSeePlacesCard from "./MustSeePlacesCard";
import "./MustSeePlaces.css";

const MustSeePlaces = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(undefined);

  useEffect(function () {
    fetch("./Components.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data);
        setData(data.mustSeePlaces);
      });
  }, []);

  function changeCurrentArticle() {
    // if (index === data.length - 1) {
    //   setIndex(0);
    // } else {
    //   const newIndex = index + 1;
    //   setIndex(newIndex);
    // }

    const newIndex = index === data.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
  }

  if (!data) {
    return <div>spinner</div>;
  }
  return (
    <article className="mustSeePlaces" onClick={changeCurrentArticle}>
      <p className="mustSeePlaces__title">{data[index].title}</p>
      <img src="./images/newsLogo.png" alt="" className="mustSeePlaces__logo" />
      <img src={data[index].image} alt="" className="mustSeePlaces__summer" />
      <img src="./images/heart.png" alt="" className="mustSeePlaces__heart" />
      <div className="mustSeePlaces__headline">
        <h1 className="mustSeePlaces__h1">{data[index].headline}</h1>
        <p className="mustSeePlaces__text">{data[index].text}</p>
      </div>
    </article>
  );
};

export default MustSeePlaces;
