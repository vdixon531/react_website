import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function CardItem(props) {
  const [isHovered, setIsHovered] = useState(false);
  const history = useHistory(); // Use history for internal navigation

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleClick = (event) => {
    if (props.path.startsWith("http")) {
      event.preventDefault(); // Prevent navigation in the current tab
      window.open(props.path, "_blank", "noopener,noreferrer"); // Open in new tab
    } else {
      event.preventDefault();
      history.push(props.path);
    }
  };

  const scaleValue = isHovered ? "scale(1.1)" : "scale(1)";

  return (
    <li
      className="cards__item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transform: isHovered ? "translateY(-5px)" : "none" }}
    >
      <a className="cards__item__link" href={props.path} onClick={handleClick}>
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
          <button className="show-button">Show</button>
        </div>
      </a>
    </li>
  );
}

export default CardItem;
