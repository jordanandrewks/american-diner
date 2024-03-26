"use client";

import React, { useEffect, useRef, useState } from "react";
import PlayPauseButton from "../play-pause-button/PlayPauseButton";
import style from "./VideoPlayer.module.css";

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Autoplay started!
          setIsPlaying(true);
        })
        .catch((error) => {
          // Autoplay was prevented.
          console.log("Autoplay was prevented:", error);
          setIsPlaying(false);
        });
    }
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={style.videoContainer}>
      <video
        preload="auto"
        ref={videoRef}
        className={style.heroVideo}
        loop
        muted
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <PlayPauseButton
        onButtonClickCallBack={togglePlayPause}
        isPlaying={!isPlaying}
      />
    </div>
  );
};

export default VideoPlayer;
