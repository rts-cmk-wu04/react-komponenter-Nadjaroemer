//TheNewyYorkTimes.js
import { useEffect, useState } from "react";

import TheNewYorkTimesCard from "./TheNewYorkTimesCard";

const TheNewyYorkTimes = () => {
  var [data, setData] = useState([]);

  useEffect(function () {
    fetch("./Components.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data);
        setData(data.theNewYorkTimes);
      });
  }, []);

  return (
    <article className="">
      {data.map(function (item) {
        return (
          <TheNewYorkTimesCard
            key={item.title}
            image={item.image}
            title={item.title}
            text={item.text}
            button={item.button}
            backgroundImage={item.backgroundImage}
          />
        );
      })}
    </article>
  );
};

export default TheNewyYorkTimes;
