import { Layout, Menu, Avatar, Image } from "antd";
import React from "react";
import AvatarImage from "../../assets/avatar.svg";

const Sider = () => (
  <Layout.Sider
    breakpoint="lg"
    collapsedWidth="0"
    onBreakpoint={(broken) => {
      console.log(broken);
    }}
    onCollapse={(collapsed, type) => {
      console.log(collapsed, type);
    }}
    style={{
      overflow: "auto",
      height: "100vh",
      position: "fixed",
      left: 0,
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar size={50} src={<Image src={AvatarImage} />} />
      <p style={{ color: "white", paddingTop: "5px" }}>Mobolade</p>
    </div>

    <div className="logo" style={{ paddingBottom: "20px" }} />
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
      <Menu.Item key="1">
        <i style={{ marginRight: "15px" }} className="fas fa-headphones"></i>
        Discover
      </Menu.Item>
      <Menu.Item key="2">
        <i style={{ marginRight: "15px" }} className="fas fa-search"></i>
        Search
      </Menu.Item>
      <Menu.Item key="3">
        <i style={{ marginRight: "15px" }} className="fas fa-heart"></i>
        Favorites
      </Menu.Item>
      <Menu.Item key="4">
        <i style={{ marginRight: "15px" }} className="fas fa-play-circle"></i>
        Playlist
      </Menu.Item>
      <Menu.Item key="5">
        <i style={{ marginRight: "15px" }} className="fas fa-align-left"></i>
        Charts
      </Menu.Item>
    </Menu>
  </Layout.Sider>
);

export default Sider;
