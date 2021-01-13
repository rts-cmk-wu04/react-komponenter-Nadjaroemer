//OutdoorExperience.js

import { useEffect, useState } from "react";
import OutdoorExperienceCard from "./OutdoorExperienceCard";
import "./OutdoorExperience.css";

const OutdoorExperience = () => {
  var [data, setData] = useState([]);

  useEffect(function () {
    fetch("./Components.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data);
        setData(data.outdoorExperience);
      });
  }, []);

  return (
    <article className="outdoorExperienceCard">
      {data.map(function (item) {
        return (
          <OutdoorExperienceCard
            key={item.title}
            image1={item.image1}
            image2={item.image2}
            image3={item.image3}
            image4={item.image4}
            link={item.link}
            text={item.text}
            title={item.title}
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

export default OutdoorExperience;
