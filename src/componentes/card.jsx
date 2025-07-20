import React from "react";
import "./card.css";

function Card({ title, img, link, className = "" }) {
  const handleClick = () => {
    if (link && link !== "#") {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className={`card ${className}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <div className="card-header">
        <img src={img} alt={title} />
      </div>
      <div className="card-body">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Card;
