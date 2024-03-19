import React, { useEffect, useRef, useState } from "react";
import PlayPauseButton from "../play-pause-button/PlayPauseButton";

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
    <div className="hero">
      <video ref={videoRef} width="100%" loop muted>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <button onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button> */}
      <PlayPauseButton></PlayPauseButton>

      <style jsx>{`
        .hero {
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default VideoPlayer;
