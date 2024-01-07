"use client";

import React from "react";
import styles from "../footer.module.css";
import Image from "next/image";

const TestButton = (props) => {
  const openNewTab = (url) => {
    console.log(url);
    // window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      className={styles.buttonContainer}
      onClick={() => {
        openNewTab(props.linkUrl);
      }}
    >
      <Image
        className={styles.buttonImage}
        src={props.linkSrc}
        width={20}
        height={20}
        alt={props.linkAlt}
      />
    </button>
  );
};

export default TestButton;
