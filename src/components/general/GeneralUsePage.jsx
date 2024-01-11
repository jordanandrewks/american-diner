import React from "react";
import styles from "./GeneralUsePage.module.css";
import "/src/app/globals.css";

export default function GeneralUsePage({ title }) {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>{title}</h1>
      <div> Here </div>
    </div>
  );
}
