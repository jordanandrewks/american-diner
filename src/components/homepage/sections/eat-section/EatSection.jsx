import React from "react";
import SectionContainer from "@/components/homepage/sections/SectionContainer";
import styles from "./EatSection.module.css";
import SectionMenuButton from "../../section-menu-button/SectionMenuButton";
import FoodMenuItem from "./food-menu-item/FoodMenuItem";

const EatSection = () => {
  const highlightedFoodLinks = [
    {
      src: "/homepage/food-highlights/FriesAI-Highlight.png",
      alt: "Specialty Fries Menu",
      url: "/",
      displayText: "FRIES",
    },
    {
      src: "/homepage/food-highlights/AmericanDiner-Burger-Highlight.png",
      alt: "Burger Menu",
      url: "/",
      displayText: "BURGERS",
    },
    {
      src: "/homepage/food-highlights/BBQ Ribs-Highlight.png",
      alt: "BBQ Menu",
      url: "/",
      displayText: "BBQ",
    },
    {
      src: "/homepage/food-highlights/PizzaAi-Highlight.png",
      alt: "Pizza Menu",
      url: "/",
      displayText: "PIZZA",
    },
  ];

  return (
    <SectionContainer>
      <div className={styles.container}>
        <div className={styles.foodContainer}>
          {/* Top Section, Winners of 2023 awards*/}
          <div className={styles.awardContainer}>
            <div className={styles.leftSection}>Left</div>
            <div className={styles.rightSection}>Right</div>
          </div>

          <div className={styles.itemContainer}>
            {highlightedFoodLinks.map((item) => (
              <FoodMenuItem
                key={item.alt}
                imageSrc={item.src}
                imageAlt={item.alt}
                imageLink={item.url}
                bannerText={item.displayText}
              />
            ))}
          </div>
        </div>
        {/* To Menu Button */}
        <SectionMenuButton
          placeHolderTextLine1={"FOOD"}
          placeHolderTextLine2={"MENU"}
        />
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
