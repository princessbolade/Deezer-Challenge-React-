import React from "react";
import "./card.css";

const CardComponent = ({ data, ...props }) => {
  const Url = data.picture
    ? data.picture
    : data.cover
    ? data.cover
    : `https://e-cdns-images.dzcdn.net/images/cover/${data?.md5_image}/250x250-000000-80-0-0.jpg`;

  return (
    <div
      onClick={() => {
        if (props?.onSelect) {
          props?.onSelect(data);
        }
        return;
      }}
      style={{
        textAlign: "center",
        display: "inline-block",
        margin: "0px 17px",
        cursor: "pointer",
      }}
    >
      <div
        className="card-style"
        style={{
          background: `Url( ${Url})`,
        }}
      ></div>
      <p
        style={{
          fontWeight: "bold",
          fontSize: "13px",
          marginTop: "15px !important",
        }}
      >
        {data?.title}
      </p>
    </div>
  );
};
export default CardComponent;
