import "./App.css";
import { Layout, Spin } from "antd";
import Sider from "./components/sider/sider";
import Header from "./components/header/header";
import Section from "./components/Sections/section";

import React, { useCallback, useState } from "react";
import MusicPlayer from "./components/music-player/music-player";

const App = () => {
  const initState = {
    tracks: {
      data: [],
      total: 0,
    },
    playlists: {
      data: [],
      total: 0,
    },
    albums: {
      data: [],
      total: 0,
    },
  };
  const [data, setData] = useState(initState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [track, setTrack] = useState({});

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError("");
      try {
        const response = await fetch(
          "https://cors.bridged.cc/https://api.deezer.com/chart/0"
        );
        const data = await response.json();

        setData(data);
        setIsLoading(false);

        console.log(data);
      } catch (error) {
        setError(String(error));
      }
    };

    void fetchData();
  }, []);

  const onSelect = (data) => setTrack(data);
  return (
    <Layout>
      <Sider />
      <Layout className="content">
        <Header />
        <Layout.Content>
          <Spin spinning={isLoading}>
            <Section
              data={data.tracks}
              title="RELEASED THIS WEEK"
              onSelect={onSelect}
            />
            <Section data={data.playlists} title=" FEATURED PLAYLST" />
            <Section data={data.albums} title="BROWSE" />
            <MusicPlayer data={track} />
          </Spin>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default App;
