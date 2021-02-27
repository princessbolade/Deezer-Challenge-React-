import React from "react";
import CardComponent from "../card/card-component";

const FeaturedPlaylist = () => (
  <div>
    <h4
      style={{
        fontWeight: "bolder",
        opacity: "0.7px",
        color: "gray",
        marginTop: "15px",
        paddingLeft: "25px",
        fontSize: "1rem",
      }}
    >
      FEATURED PLAYLIST
    </h4>
    <CardComponent />
  </div>
);

export default FeaturedPlaylist;
