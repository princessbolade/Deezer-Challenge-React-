import React from "react";
import CardComponent from "../card/card-component";

const ReleasedThisWeek = () => (
  <div>
    <h4
      style={{
        fontWeight: "bolder",
        opacity: "0.7px",
        color: "gray",
        marginTop: "25px",
        paddingLeft: "25px",
        fontSize: "1rem",
      }}
    >
      RELEASED THIS WEEK
    </h4>
    <CardComponent />
  </div>
);

export default ReleasedThisWeek;
