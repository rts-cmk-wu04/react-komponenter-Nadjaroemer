//Lifestyle.js
import { useEffect, useState } from "react";
import LatestNewsCard from "./LatestNewsCard";
import "./LatestNews.css";
import "./Lifestyle.css";

const Lifestyle = () => {
  var [data, setData] = useState([]);

  useEffect(function () {
    fetch("./Components.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data);
        setData(data.lifestyle);
      });
  }, []);

  return (
    <article className="foodAndLifestyle">
      {data.map(function (item) {
        return (
          <LatestNewsCard
            key={item.title}
            image={item.image}
            title={item.title}
            text={item.text}
            color={item.color}
          />
        );
      })}
    </article>
  );
};

export default Lifestyle;
