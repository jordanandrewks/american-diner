import React from "react";
import styles from "./FoodMenuItem.module.css";

const MenuItem = ({ demoName }) => {
  return <div className={styles.container}>{demoName}</div>;
};

export default MenuItem;
