//Collection.js
import { useEffect, useState } from "react";
import CollectionCard from "./CollectionCard";
import "./Collection.css";

const Collection = () => {
  var [data, setData] = useState([]);

  useEffect(function () {
    fetch("./Components.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data);
        setData(data.collection);
      });
  }, []);

  return (
    <article className="articleCard">
      {data.map(function (item) {
        return (
          <CollectionCard
            key={item.title}
            headline={item.headline}
            image1={item.image1}
            image2={item.image2}
            title={item.title}
            title2={item.title2}
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

export default Collection;
