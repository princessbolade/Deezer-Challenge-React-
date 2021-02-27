import "./App.css";
import { Layout } from "antd";
import Sider from "./components/sider/sider";
import Header from "./components/header/header";
import { Component } from "react";
import ReleasedThisWeek from "./components/Sections/released-this-week";
import FeaturedPlaylist from "./components/Sections/featured-playlist";
import Browse from "./components/Sections/browse";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout>
        <Sider />
        <Layout>
          <Header />
          <Layout.Content>
            <ReleasedThisWeek />
            <FeaturedPlaylist />
            <Browse />
          </Layout.Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
