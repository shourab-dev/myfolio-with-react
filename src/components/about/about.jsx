import React from "react";
import Heading from "../common/heading";
import Card from "../common/card";
import "./about.css";
function about() {
  return (
    <section id="about">
      <div className="container">
        <Heading title="About us">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil non
          temporibus <b>iusto animi impedit</b> , voluptates in vero nam
          blanditiis quidem quod qui, amet voluptatibus ea ipsam natus, ipsum
          eum adipisci!
        </Heading>

        <div className="card_group" style={{ marginTop: "80px" }}>
          <div className="row">
            <Card
              align="center"
              breakpoint="col-lg-3 col-sm-6"
              icon="bi-lightbulb"
            />
            <Card
              align="center"
              breakpoint="col-lg-3 col-sm-6"
              icon="bi-pencil"
            />
            <Card
              align="center"
              breakpoint="col-lg-3 col-sm-6"
              icon="bi-gear"
            />
            <Card
              align="center"
              breakpoint="col-lg-3 col-sm-6"
              icon="bi-pc-display-horizontal"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default about;
