import React from "react";
import styles from "./HighlightItem.module.css";
import Image from "next/image";

const HighlightItem = ({
  src,
  alt,
  url, // TODO Get this to work...
  title1,
  title2,
  subTitle1,
  subTitle2,
  buttonTitleLine1,
  buttonTitleLine2,
  buttonTitleLine3,
}) => {
  console.log(title2);
  return (
    <div className={styles.container}>
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
      <div className={styles.textContainer}>
        <div className={styles.titleContainer}>
          <p>{title1}</p>
          <p>{title2}</p>
        </div>
        <div className={styles.subTitleContainer}>
          <p>{subTitle1}</p>
          <p>{subTitle2}</p>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.buttonTextContainer}>
          <p>{buttonTitleLine1}</p>
          <p>{buttonTitleLine2}</p>
          <p>{buttonTitleLine3}</p>
        </div>
      </div>
    </div>
  );
};

export default HighlightItem;
