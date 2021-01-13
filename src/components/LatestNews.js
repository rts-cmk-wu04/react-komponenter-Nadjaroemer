//Collection.js
import { useEffect, useState } from "react";
import LatestNewsCard from "./LatestNewsCard";

const LatestNews = () => {
  var [data, setData] = useState([]);

  useEffect(function () {
    fetch("./Components.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data);
        setData(data.latestNews);
      });
  }, []);

  return (
    <article className="latestNewsContainer">
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
      {/* {data[0] ? (
        <Card title={data[0].title} image={data[0].image} text={data[0].text} />
      ) : (
        <div>no data</div>
      )} */}
    </article>
  );
};

export default LatestNews;
