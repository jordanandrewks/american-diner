import React from "react";
import styles from "./PlayPauseButton.module.css";
import Image from "next/image";

const PlayPauseButton = ({ isPlaying, onButtonClickCallBack }) => {
  const imageDetails = isPlaying
    ? { path: "/icons/video/icons8-pause-50.png", alt: "Pause" } // Assuming isPlaying means "Pause" icon
    : { path: "/icons/video/icons8-play-50.png", alt: "Play" }; // Change to your actual "Play" icon path

  return (
    <div>
      <button
        onClick={() => {
          onButtonClickCallBack();
        }}
        className={styles.container}
      >
        <Image
          src={imageDetails.path}
          alt={imageDetails.alt}
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};

export default PlayPauseButton;
