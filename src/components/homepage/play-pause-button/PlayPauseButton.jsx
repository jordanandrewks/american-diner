import React from "react";
import styles from "./PlayPauseButton.module.css";
import Image from "next/image";

const PlayPauseButton = ({ isPlaying, onButtonClickCallBack }) => {
  const imageDetails = isPlaying
    ? { path: "/icons/video/icons8-play-50.png", alt: "play" }
    : { path: "/icons/video/icons8-Pause-50.png", alt: "Pause" };

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
