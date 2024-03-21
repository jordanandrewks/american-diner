import React from "react";
import SectionContainer from "../SectionContainer";
import styles from "./DrinkSection.module.css";
import DrinkMenuItem from "./drink-menu-item/DrinkMenuItem";
import SectionMenuButton from "../../section-menu-button/SectionMenuButton";

const DrinkSection = () => {
  return (
    <SectionContainer>
      <div className={styles.container}>
        <div className={styles.drinksContainer}>
          <DrinkMenuItem demoPlaceHolderText={"Item 1"} />
          <DrinkMenuItem demoPlaceHolderText={"Item 2"} />
          <DrinkMenuItem demoPlaceHolderText={"Item 3"} />
          <DrinkMenuItem demoPlaceHolderText={"Item 4"} />
        </div>
        <SectionMenuButton
          placeHolderTextLine1={"DRINKS"}
          placeHolderTextLine2={"MENU"}
        />
      </div>
    </SectionContainer>
  );
};

export default DrinkSection;
