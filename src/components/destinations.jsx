import React from "react";

function Destinations(props) {
  return (
    <li className="destination">
      <img className="destination-image" src={props.image}></img>
      <div className="destination-name">{props.name}</div>
      <a href={props.link} className="destination-link">
        {props.click}
      </a>
    </li>
  );
}
export default Destinations;
