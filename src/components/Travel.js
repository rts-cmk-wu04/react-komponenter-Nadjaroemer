//Travel.js
import { useEffect, useState } from "react";
import TravelCard from "./TravelCard";

const Travel = () => {
  var [data, setData] = useState([]);

  useEffect(function () {
    fetch("./Components.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data);
        setData(data.travel);
      });
  }, []);

  return (
    <article>
      {data.map(function (item) {
        return (
          <TravelCard
            key={item.title}
            category={item.category}
            title={item.title}
            image={item.image}
            description={item.description}
            //color={item.color}
          />
        );
      })}
    </article>
  );
};

export default Travel;
