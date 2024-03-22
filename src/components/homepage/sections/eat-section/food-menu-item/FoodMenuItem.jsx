import React from "react";
import styles from "./FoodMenuItem.module.css";
import Image from "next/image";

const MenuItem = ({ demoName }) => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.imageContainer}> */}
      <Image
        className={styles.imageContainer}
        src={"/homepage/food-highlights/PizzaAi-Highlight.png"}
        // src={"/homepage/food-highlights/AmericanDiner-Burger-Highlight.png"}
        // width={500}
        // height={600}
        fill={true}
        alt={"Burger"}
      />
      {/* <Image src={image.url} height={100} width={100} alt={image.alt} /> */}
    </div>
    // </div>
  );
};

export default MenuItem;
