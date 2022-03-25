import React from "react";
import "./card.css";
const Card = (props) => {
  const { align, icon, breakpoint } = props;
  return (
    <div className={`text-${align} ${breakpoint} mb-3 mb-lg-0 about_card`}>
      <span>
        <i className={`bi ${icon}`}></i>
      </span>
      <h4>Title Goes Here</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
        repudiandae
      </p>
    </div>
  );
};
export default Card;
