import React from "react";
import "./Components.css";

function Components(props) {
  return (
    <>
      <h3 id={props.id} className="compo_heading">
        {props.heading}
      </h3>
      <div className="imgAndText" data-aos="fade-out">
        <img
          className="mainImage"
          src={props.imgsrc1}
          height="200px"
          width="500px"
          alt="images appear here"
        />
        <p className="details">{props.content}</p>
      </div>

      <div className="otherImages" data-aos="fade-in">
        <img
          className="extra-img"
          src={props.imgsrc2}
          height="200px"
          width="400px"
          alt="images appear here"
        />
        <img
          className="extra-img"
          src={props.imgsrc3}
          height="200px"
          width="400px"
          alt="images appear here"
        />
        <img
          className="extra-img"
          src={props.imgsrc4}
          height="200px"
          width="400px"
          alt="images appear here"
        />
      </div>
    </>
  );
}

export default Components;
