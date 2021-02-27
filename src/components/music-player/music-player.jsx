import "./music-player.css";
import { useEffect, useRef, useState } from "react";

const MusicPlayer = ({ data }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playerRef = useRef();

  useEffect(() => {
    setIsPlaying(false);
  }, [data]);

  function playSong() {
    isPlaying ? playerRef.current.pause() : playerRef.current.play();
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="player-panel">
      <div className="image">
        {data && (
          <img
            src={
              data.album
                ? data.album.cover_medium
                : "https://files.radio.co/humorous-skink/staging/default-artwork.png"
            }
            alt="music"
          />
        )}
      </div>
      {data && <div className="title">{data.title}</div>}
      <div className="controls">
        <i className="fa fa-step-backward" aria-hidden="true"></i>
        <i
          className={`fa ${isPlaying ? "fa-pause-circle" : "fa-play-circle"}`}
          aria-hidden="true"
          onClick={() => playSong()}
        ></i>
        <i className="fa fa-step-forward" aria-hidden="true"></i>
      </div>
      <div className="bar">
        <div className="progress"></div>
      </div>
      <div className="options">
        <i className="fa fa-heart" aria-hidden="true"></i>
        <i className="fa fa-random" aria-hidden="true"></i>
        <i className="fa fa-retweet" aria-hidden="true"></i>
        <i className="fa fa-volume-up" aria-hidden="true"></i>
      </div>
      {data && <audio ref={playerRef} src={`${data.preview}`} />}
    </div>
  );
};
export default MusicPlayer;
