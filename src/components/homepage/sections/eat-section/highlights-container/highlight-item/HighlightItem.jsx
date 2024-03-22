import React from "react";
import styles from "./HighlightItem.module.css";

const HighlightItem = ({
  src,
  alt,
  url,
  title1,
  title2,
  subTitle1,
  subTitle2,
  buttonTitleLine1,
  buttonTitleLine2,
  buttonTitleLine3,
}) => {
  console.log(title1);
  return <div className={styles.container}>{title2}</div>;
};

export default HighlightItem;
