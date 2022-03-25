import React from "react";
import "./service.css";
import Heading from "../common/heading";
import BgHero from "../img/bg_hero.jpg";
import Card from "../common/card";
function service() {
  return (
    <section id="service" style={{ backgroundImage: `url(${BgHero})` }}>
      <div className="container">
        <div className="row">
          <Heading title="Service" align="start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quae
            debitis corporis et corrupti
          </Heading>
          <div className="col-lg-6">
            <div className="card_grp" style={{ marginTop: "100px" }}>
              <div className="row">
                <Card breakpoint="col-md-6 mb-lg-4 " icon="bi-lightbulb" />
                <Card breakpoint="col-md-6 mb-lg-4  border-0" icon="bi-gear" />
                <Card breakpoint="col-md-6 mb-lg-4 " icon="bi-lightbulb" />
                <Card breakpoint="col-md-6 mb-lg-4 " icon="bi-gear" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default service;
