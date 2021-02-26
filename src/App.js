import "./App.css";
import { Layout } from "antd";
import Sider from "./components/sider/sider";
import Header from "./components/header/header";
import React from "react";

function App() {
  return (
    <Layout>
      <Sider />
      <Layout>
        <Header />
        <Layout.Content>
          <div>Home</div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default App;
