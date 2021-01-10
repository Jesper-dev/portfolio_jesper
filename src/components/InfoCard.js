import React from "react";

const InfoCard = ({ text, url }) => {
  return (
    <div className="infoCard-container">
      <p>{text}</p>
      <a target="_blank" rel="noreferrer" href={url}>
        <button onClick={() => console.log("Clicked")}>
          Visit website <i className="fas fa-arrow-right"></i>
        </button>
      </a>
    </div>
  );
};

export default InfoCard;
