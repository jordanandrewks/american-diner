"use client";

import React from "react";
import styles from "../footer.module.css";
import Image from "next/image";

/* 
  TODO: This might be able to be turned into a component which just opens external links? As that's the whole point of react/nextjs.
*/

const OpenSocialLinkButton = (props) => {
  const openNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
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
        draggable={false}
      />
    </button>
  );
};

export default OpenSocialLinkButton;
