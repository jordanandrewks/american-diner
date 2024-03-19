import React from "react";
import styles from "./PlayPauseButton.module.css";
import Image from "next/image";

const PlayPauseButton = ({ isPlaying, onButtonClickCallBack }) => {
  const imageDetails = isPlaying
    ? { path: "/icons/cookies/icons8-cookie-100.png", alt: "Pause" } // Assuming isPlaying means "Pause" icon
    : { path: "/icons/cookies/icons8-play-100.png", alt: "Play" }; // Change to your actual "Play" icon path

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
            width={30}
            height={30}
          />
        I
      </button>
    </div>
  );
};

export default PlayPauseButton;
