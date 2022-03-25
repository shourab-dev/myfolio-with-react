import React from "react";
import "./work.css";
import Heading from "../common/heading";
import PortfolioItem from "../common/portfolio_item";
function work() {
  return (
    <section id="work">
      <Heading title="Our Work">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        excepturi! Mollitia porro enim adipisci.
      </Heading>

      <div className="row mx-0">
        <PortfolioItem
          breakpoint="col-lg-3 col-sm-6"
          image="images/work.png"
          title="Title goes here"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa perferendis, asperiores "
        />
        <PortfolioItem
          breakpoint="col-lg-3 col-sm-6"
          image="images/work.png"
          title="Title goes here"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa perferendis, asperiores "
        />
        <PortfolioItem
          breakpoint="col-lg-3 col-sm-6"
          image="images/work.png"
          title="Title goes here"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa perferendis, asperiores "
        />
        <PortfolioItem
          breakpoint="col-lg-3 col-sm-6"
          image="images/work.png"
          title="Title goes here"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa perferendis, asperiores "
        />
        <PortfolioItem
          breakpoint="col-lg-3 col-sm-6"
          image="images/work.png"
          title="Title goes here"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa perferendis, asperiores "
        />
        <PortfolioItem
          breakpoint="col-lg-3 col-sm-6"
          image="images/work.png"
          title="Title goes here"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa perferendis, asperiores "
        />
        <PortfolioItem
          breakpoint="col-lg-3 col-sm-6"
          image="images/work.png"
          title="Title goes here"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa perferendis, asperiores "
        />
        <PortfolioItem
          breakpoint="col-lg-3 col-sm-6"
          image="images/work.png"
          title="Title goes here"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa perferendis, asperiores "
        />
      </div>
    </section>
  );
}

export default work;
