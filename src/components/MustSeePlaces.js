//MustSeePlaces.js
import { useEffect, useState } from "react";
import MustSeePlacesCard from "./MustSeePlacesCard";
import "./MustSeePlaces.css";

const MustSeePlaces = () => {
  var [data, setData] = useState([]);

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

  return (
    <article className="mustSeePlaces">
      {data.map(function (item) {
        return (
          <MustSeePlacesCard
            key={item.title}
            title={item.title}
            image1={item.image1}
            image2={item.image2}
            image3={item.image3}
            headline={item.headline}
            text={item.text}
          />
        );
      })}
    </article>
  );
};

export default MustSeePlaces;
