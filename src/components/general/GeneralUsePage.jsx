import React from "react";
import styles from "./GeneralUsePage.module.css";

export default function GeneralUsePage({ title }) {

    console.log(title);

  return (<div className={styles.testContainer} >
        
        <h1>{title}</h1>

    </div>);
}
