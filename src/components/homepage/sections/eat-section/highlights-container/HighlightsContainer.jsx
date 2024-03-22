import React from "react";
import styles from "./HighlightsContainer.module.css";
import HighlightItem from "./highlight-item/HighlightItem";

const HighlightsContainer = ({ contents }) => {
  return (
    <div className={styles.container}>
      {contents.map((item) => (
        <HighlightItem
          key={item.alt}
          src={item.src}
          alt={item.alt}
          url={item.url}
          title1={item.title1}
          title2={item.title2}
          subTitle1={item.subTitle1}
          subTitle2={item.subTitle2}
          buttonTitleLine1={item.buttonTitleLine1}
          buttonTitleLine2={item.buttonTitleLine2}
          buttonTitleLine3={item.buttonTitleLine3}
        />
      ))}
    </div>
  );
};

export default HighlightsContainer;
