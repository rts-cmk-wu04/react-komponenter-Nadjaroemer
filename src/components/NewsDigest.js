//NewsDigest.js

import { useEffect, useState } from "react";
import NewsDigestCard from "./NewsDigestCard";
import "./LatestNews.css";
import "./NewsDigest.css";

const NewsDigest = () => {
  var [data, setData] = useState([]);

  useEffect(function () {
    fetch("./Components.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data);
        setData(data.newsDigest);
      });
  }, []);

  return (
    <article className="latestNewsContainer">
      <h1 className="newsDigest__h1">News Digest</h1>
      {data.map(function (item) {
        return (
          <NewsDigestCard
            key={item.title}
            image={item.image}
            title={item.title}
            text={item.text}
          />
        );
      })}
    </article>
  );
};

export default NewsDigest;
