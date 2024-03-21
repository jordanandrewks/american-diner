import React from "react";
import styles from "./DrinkMenuItem.module.css";

const DrinkMenuItem = ({ demoPlaceHolderText }) => {
  return <div className={styles.container}>{demoPlaceHolderText}</div>;
};

export default DrinkMenuItem;
