import React from "react";
import { tracks } from "../Tracks";
import "../styles/Music.css";

const Music = () => {


  return (
    <div className="music-page">
      <h1>Releases</h1>
      <div className="track-grid">
        {tracks.map((id) => (
          <iframe
            key={id}
            src={`https://open.spotify.com/embed/track/${id}`}
            width="100%"
            height="100"
            frameBorder="0"
            allow="encrypted-media"
            title={`spotify-${id}`}
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default Music;
