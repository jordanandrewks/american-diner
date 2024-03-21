import React from "react";
import SectionContainer from "../SectionContainer";
import styles from "./LiveSportsSection.module.css";
import SectionMenuButton from "../../section-menu-button/SectionMenuButton";

const LiveSportsSection = () => {
  return (
    <SectionContainer>
      <div className={styles.container}>
        <div className={styles.eventContainer}> Left </div>
        <SectionMenuButton
          placeHolderTextLine1={"VIEW"}
          placeHolderTextLine2={"LIVE"}
          placeHolderTextLine3={"SPORTS"}
        />
      </div>
    </SectionContainer>
  );
};

export default LiveSportsSection;
