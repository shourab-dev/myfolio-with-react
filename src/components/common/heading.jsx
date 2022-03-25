import React, { Children } from "react";
import "./heading.css";
const Heading = (props) => {
  const { align, title, children } = props;
  return (
    <div className="heading">
      <h2 className={align ? `text-${align} alternate` : `text-center`}>
        {title}
      </h2>
      <p
        className={
          align
            ? `text-${align} col-lg-6 alternate`
            : "text-center col-lg-6 m-auto"
        }
      >
        {children}
      </p>
    </div>
  );
};

export default Heading;
