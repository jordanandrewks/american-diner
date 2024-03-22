import React from "react";
import SectionContainer from "../SectionContainer";
import styles from "./DrinkSection.module.css";
import DrinkMenuItem from "./drink-menu-item/DrinkMenuItem";
import SectionMenuButton from "../../section-menu-button/SectionMenuButton";

const DrinkSection = () => {
  const drinkLinks = [
    {
      src: "/homepage/food-highlights/FriesAI-Highlight.png",
      alt: "Beers",
      url: "/",
      displayText: "BEERS",
    },
    {
      src: "/homepage/food-highlights/AmericanDiner-Burger-Highlight.png",
      alt: "Wines",
      url: "/",
      displayText: "WINES",
    },
    {
      src: "/homepage/food-highlights/BBQ Ribs-Highlight.png",
      alt: "Whiskies",
      url: "/",
      displayText: "WHISKIES",
    },
    {
      src: "/homepage/food-highlights/PizzaAi-Highlight.png",
      alt: "Soda",
      url: "/",
      displayText: "SODAS",
    },
  ];

  return (
    <SectionContainer>
      <div className={styles.container}>
        <div className={styles.drinksContainer}>
          {drinkLinks.map((item) => (
            <DrinkMenuItem
              key={item.alt}
              imageSrc={item.src}
              imageAlt={item.alt}
              imageLink={item.url}
              bannerText={item.displayText}
            />
          ))}
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
