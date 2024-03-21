import React from "react";
import SectionContainer from "@/components/homepage/sections/SectionContainer";
import styles from "./EatSection.module.css";

const EatSection = () => {
  return (
    <SectionContainer>
      {/* <div>
        <p className={styles.subTitle}>2023 </p>
      </div> */}

      {/* Top Section, Winners of 2023 awards*/}
      <div className={styles.awardContainer}>
        <div className={styles.leftSection}>Left</div>
        <div className={styles.rightSection}>Right</div>
      </div>

      <div className={styles.container}>
        <div className={styles.item}>item 1</div>
        <div className={styles.item}>item 2</div>
        <div className={styles.item}>item 3</div>
        <div className={styles.item}>item 4</div>
      </div>
    </SectionContainer>
  );
};

// Steaks, Burgers, BBQ, Chicken, Pizza
// Anb More! See full menu
export default EatSection;
