import React from "react";
import styles from "./HighlightsContainer.module.css";
import HighlightItem from "./highlight-item/HighlightItem";

const HighlightsContainer = () => {
  return (
    <div className={styles.container}>
        <HighlightItem/>
        <HighlightItem/>
    </div>
  )
}

export default HighlightsContainer;
