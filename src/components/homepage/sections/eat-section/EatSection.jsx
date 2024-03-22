import React from "react";
import SectionContainer from "@/components/homepage/sections/SectionContainer";
import styles from "./EatSection.module.css";
import SectionMenuButton from "../../section-menu-button/SectionMenuButton";
import FoodMenuItem from "./food-menu-item/FoodMenuItem";
import HighlightsContainer from "./highlights-container/HighlightsContainer";

const EatSection = () => {
  // TODO Make this load from an API!
  // TODO In the API, there needs to be a condition called DEV! So it will only go to DEV places, not deployed... i.e. devs logged in...

  const foodSectionHighlightLinks = [
    {
      src: "/homepage/food-highlights/FriesAI-Highlight.png",
      alt: "Restaurant of the year promo",
      url: "/",
      title1: null,
      title2: "2023 RESTAURANT OF THE YEAR",
      subTitle1: "£0.70 PER WING",
      subTitle2: "( IN STORE ONLY )",
      buttonTitleLine1: "READ",
      buttonTitleLine2: "MORE",
      buttonTitleLine3: null,
    },
    {
      src: "/promo-photos/Wing Wednesday Promo 1.png",
      alt: "Wing Wednesday Promo",
      url: "/",
      title1: null,
      title2: "WING WEDNESDAY",
      subTitle1: "£0.70 PER WING",
      subTitle2: "( IN STORE ONLY )",
      buttonTitleLine1: "GO TO",
      buttonTitleLine2: "OFFER",
      buttonTitleLine3: null,
    },
  ];

  const foodLinks = [
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
          <HighlightsContainer contents={foodSectionHighlightLinks} />
          <div className={styles.itemContainer}>
            {foodLinks.map((item) => (
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
