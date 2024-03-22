import React from "react";
import styles from "./FoodMenuItem.module.css";
import Image from "next/image";

const MenuItem = ({ imageSrc, imageAlt, imageLink }) => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.imageContainer}
        src={imageSrc}
        fill={true}
        alt={imageAlt}
      />
    </div>
  );
};

export default MenuItem;
