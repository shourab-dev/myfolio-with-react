import React from "react";
import "./portfolioItem.css";
const PortfolioItem = (props) => {
  const { image, title, details, breakpoint } = props;
  return (
    <div className={`work_card ${breakpoint}`}>
      <img src={image} alt={title} />
      <div className="overlay">
        <div className="overlay_cnt">
          <h4>{title}</h4>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
