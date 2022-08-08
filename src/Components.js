import React from "react";
import Carousal from "./Carousal";
import "./Components.css";
import Card from "react-bootstrap/Card";

function Components(props) {
  return (
    <>
      <h3 id={props.id} className="compo_heading">
        {props.heading}
      </h3>
      <div className="imgAndText" data-aos="fade-out">
        <Carousal
          imgsrc1={props.imgsrc1}
          imgsrc2={props.imgsrc2}
          imgsrc3={props.imgsrc3}
          imgsrc4={props.imgsrc4}
        />
        <br />
        <Card body className="details">
          {props.content}
        </Card>
      </div>
    </>
  );
}

export default Components;
