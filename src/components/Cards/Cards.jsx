import React from "react";
// import Project from "../Projects/Project";
import './Cards.css'
const Cards = ({cardimg,title,cardtext,link,somewhere}) => {
  return (
    <>
      <div className="card shadow-lg p-3 mb-5 bg-body rounded align-items-center text-center">
        <img src={cardimg} className="card-img-top img-thumbnail" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{cardtext}</p>
          <a href={link} target="_blank"  className="btn btn-outline-dark">
            {somewhere}
          </a>
        </div>
      </div>
    </>
  );
};

export default Cards;
