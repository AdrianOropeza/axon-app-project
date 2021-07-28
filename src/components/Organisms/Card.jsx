import React from "react";
import { Link } from "react-router-dom";

const Card = ({picture, name,card, path}) => {
  return (
    <article className="card">
      <div className="img-container s-ratio-16-9">
        <Link to={`/${path}/${card}`}>
          <img src={picture} alt={name} />
        </Link>
      </div>
      <div className="card__data">
        <h3 className="center t4">{name}</h3>
      </div>
    </article>
  );
};

export default Card;
