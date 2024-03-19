import React from "react";
import styles from "./PlayPauseButton.module.css";

const PlayPauseButton = () => {

  return (
    <div>
      <button onClick={() => console.log("Hello")} className={styles.container}>Hello</button>
    </div>
  );
};

export default PlayPauseButton;
