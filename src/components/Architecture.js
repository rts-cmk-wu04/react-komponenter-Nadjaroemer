//Architecture.js
import { useEffect, useState } from "react";

import Card from "./Card";
import "./Architecture.css";

const Architecture = () => {
  var [data, setData] = useState([]);

  useEffect(function () {
    fetch("./Components.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data);
        setData(data.architecture);
      });
  }, []);

  return (
    <article>
      {data.map(function (item) {
        return (
          <Card
            key={item.title}
            title={item.title}
            image={item.image}
            text={item.text}
            //color={item.color}
          />
        );
      })}
      {/* {data[0] ? (
        <Card title={data[0].title} image={data[0].image} text={data[0].text} />
      ) : (
        <div>no data</div>
      )} */}
    </article>
  );
};

export default Architecture;
