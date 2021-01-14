//DesignEducation.js
import DesignEducationCard from "./DesignEducationCard";
import { useEffect, useState } from "react";

const DesignEducation = () => {
  var [data, setData] = useState([]);

  useEffect(function () {
    fetch("./Components.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data);
        setData(data.designAndEducation);
      });
  }, []);

  return (
    <article className="designEducationCard">
      {data.map(function (item) {
        return (
          <DesignEducationCard
            key={item.title}
            image={item.image}
            title={item.title}
            color={item.color}
          />
        );
      })}
    </article>
  );
};

export default DesignEducation;
