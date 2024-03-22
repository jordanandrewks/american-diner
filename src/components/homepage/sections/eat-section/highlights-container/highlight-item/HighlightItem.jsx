import React from "react";
import styles from "./HighlightItem.module.css";

const HighlightItem = ({
  src,
  alt,
  url,
  title,
  subTitleOne,
  subTitleTwo,
  buttonTitleLine1,
  buttonTitleLine2,
  buttonTitleLine3,
}) => {
  console.log(title);
  return <div className={styles.container}>{title}</div>;
};

export default HighlightItem;
