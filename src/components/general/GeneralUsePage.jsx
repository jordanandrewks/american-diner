import React from "react";
import styles from "./GeneralUsePage.module.css";
import "/src/app/globals.css";

export default function GeneralUsePage({ title, body }) {
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.pageContainer}>
        {/* Below, needs to be change depending on the page. i.e. use this is as a proper component! */}
        <div className={styles.body}>{body}</div>
      </div>
    </div>
  );
}
