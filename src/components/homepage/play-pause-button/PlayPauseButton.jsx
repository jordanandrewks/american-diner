import React from "react";
import styles from "./PlayPauseButton.module.css";

const PlayPauseButton = ({ isPlaying, onButtonClickCallBack }) => {
  const test = () => {
    console.log(isPlaying);
  };

  return (
    <div>
      <button
        onClick={() => {
          onButtonClickCallBack();
          test();
        }}
        className={styles.container}
      >
        Hello
      </button>
    </div>
  );
};

export default PlayPauseButton;
