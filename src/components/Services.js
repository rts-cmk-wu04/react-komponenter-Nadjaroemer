import { useEffect, useState } from "react";

import ServicesCard from "./ServicesCard";
import "./Services.css";

const Services = () => {
  var [data, setData] = useState([]);

  useEffect(function () {
    fetch("./Components.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data);
        setData(data.services);
      });
  }, []);

  return (
    <article className="servicesContainer">
      {data.map(function (item) {
        return (
          <ServicesCard
            key={item.title}
            title={item.title}
            image={item.image}
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

export default Services;
