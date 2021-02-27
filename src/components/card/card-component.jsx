import React from "react";
import "./card.css";

const CardComponent = () => (
  <div style={{ textAlign: "center", display: "inline-block" }}>
    <div
      className="card-style"
      style={{
        background:
          "Url('http://c.files.bbci.co.uk/293F/production/_106195501_gettyimages-1028997414.jpg')",
      }}
    ></div>
    <p
      style={{
        fontWeight: "bold",
        fontSize: "13px",
        marginTop: "15px !important",
      }}
    >
      Bodak Yellow
    </p>
  </div>
);

export default CardComponent;
