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
          title={item.title}
          subTitleOne={item.subTitleOne}
          subTitleTwo={item.subTitleTwo}
          buttonTitleLine1={item.buttonTitleLine1}
          buttonTitleLine2={item.buttonTitleLine2}
          buttonTitleLine3={item.buttonTitleLine3}
        />
      ))}
    </div>
  );
};

export default HighlightsContainer;
