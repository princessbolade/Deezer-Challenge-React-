import React from "react";
import CardComponent from "../card/card-component";
import "./style.css";

const Section = (props) => (
  <div>
    <h4
      style={{
        fontWeight: "bolder",
        opacity: "0.7px",
        color: "gray",
        marginTop: "25px",
        paddingLeft: "25px",
        fontSize: "1rem",
        textTransform: "uppercase",
      }}
    >
      {props.title}
    </h4>

    <div
      className="scroll"
      style={{
        overflowX: "scroll",
        display: "flex",
        scrollbarWidth: "none",
      }}
    >
      {props.data.data.map((data) => (
        <CardComponent key={data.id} data={data} onSelect={props?.onSelect} />
      ))}
    </div>
  </div>
);

export default Section;
