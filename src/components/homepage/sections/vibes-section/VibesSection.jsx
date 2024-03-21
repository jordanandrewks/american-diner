import React from "react";
import SectionContainer from "../SectionContainer";
import styles from "./VibesSection.module.css";
import SectionMenuButton from "../../section-menu-button/SectionMenuButton";

const Vibes = () => {
  return (
    <SectionContainer>
      <div className={styles.container}>
        <div className={styles.eventContainer}> Left </div>
        <SectionMenuButton
          placeHolderTextLine1={"VIEW"}
          placeHolderTextLine2={"UPCOMING"}
          placeHolderTextLine3={"EVENTS"}
        />
      </div>
    </SectionContainer>
  );
};

export default Vibes;
