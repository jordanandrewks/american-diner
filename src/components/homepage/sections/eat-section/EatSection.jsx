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

    // Todo - Make the items a component...
    // inside this component - Show Image, Title
    
    /* Todo - Add a button on the right of this container,
     what will fast forward you to the foods section. 
     We can do the same for the Drinks and anything else...
      There's no point in making every single one of them clickable...
      . This should only be the case if we enable the order 
      system in the future */
  );
};

// Steaks, Burgers, BBQ, Chicken, Pizza
// Anb More! See full menu
export default EatSection;
