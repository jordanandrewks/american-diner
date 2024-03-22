import React from "react";
import SectionContainer from "../SectionContainer";
import styles from "./DrinkSection.module.css";
import DrinkMenuItem from "./drink-menu-item/DrinkMenuItem";
import SectionMenuButton from "../../section-menu-button/SectionMenuButton";

const DrinkSection = () => {
  const drinkLinks = [
    {
      src: "/homepage/drink-highlights/beer-Highlight.webp",
      alt: "Beers",
      url: "/",
      displayText: "BEERS",
    },
    {
      src: "/homepage/drink-highlights/wine1-Highlight.webp",
      alt: "Wines",
      url: "/",
      displayText: "WINES",
    },
    {
      src: "/homepage/drink-highlights/whisky-Highlight.webp",
      alt: "Whiskies",
      url: "/",
      displayText: "WHISKIES",
    },
    {
      src: "/homepage/drink-highlights/cola-Highlight.webp",
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
