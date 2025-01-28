import React, { useState } from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const scaleValue = isHovered ? "scale(1.1)" : "scale(1)";

  return (
    <>
      <li
        className="cards__item"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ transform: isHovered ? "translateY(-5px)" : "none" }}
      >
        <a className="cards__item__link" href={props.path} target="_blank" rel="noopener noreferrer">
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              src={props.src}
              alt="Project"
              className="cards__item__img"
              style={{ transform: scaleValue }}
            />
          </figure>
          <div className="cards__item__info">
            <h2 className="cards__item__text">{props.text}</h2>
            <button className="show-button" onClick={props.onClick}>Show</button>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;
