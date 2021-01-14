//LatestNews.js
import { useEffect, useState } from "react";
import LatestNewsCard from "./LatestNewsCard";
import "./LatestNews.css";

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

  const fetchMoreNews = () => {
    // const data = fetch() blabla
    setData([
      {
        image: "./images/nature.png",
        title: "Discover",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam.",
      },
    ]);
  };

  return (
    <article className="latestNewsContainer">
      <h1 className="latestNewsContainer__h1">Latest News</h1>
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
      <div className="moreNews">
        <button className="moreNews__button" onClick={fetchMoreNews}>
          More News
        </button>
      </div>
    </article>
  );
};

export default LatestNews;
