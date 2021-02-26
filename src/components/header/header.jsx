import React from "react";
import HeaderSvg from "../../assets/hero.svg";
import { Layout } from "antd";

const Header = () => (
  <Layout.Header
    style={{
      backgroundColor: "#ffb5a7",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "200px",
    }}
  >
    <img
      style={{
        height: "200px",
        transformOrigin: "center",
        transform: "rotateY(180deg)",
      }}
      src={HeaderSvg}
      alt="header"
    />
    <div style={{ color: "white", margin: "0" }}>
      <p
        style={{
          color: "white",
          fontSize: "35px",
          fontWeight: "bolder",
          margin: "0",
        }}
      >
        Your Favorite tunes
      </p>
      <p style={{ fontSize: "20px", fontWeight: "bold", float: "right" }}>
        All ☀ and all 🌙{" "}
      </p>
    </div>
  </Layout.Header>
);

export default Header;
