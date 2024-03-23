"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./FoodMenuItem.module.css";
import Image from "next/image";

const MenuItem = ({ imageSrc, imageAlt, imageLink, bannerText }) => {
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      const imageStyle = imageRef.current.style;
      imageStyle.transition = "transform .15s ease-in-out";
      imageStyle.transform = isHovered ? "scale(1.1)" : "scale(1)";
    }
  }, [isHovered]);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer} ref={imageRef}>
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          {/* Seems convoluted, but to avoid errors about depreciated code. This is the best way so far */}
          <Image
            style={{ objectFit: "cover" }}
            src={imageSrc}
            alt={imageAlt}
            fill={true}
          />
        </div>
      </div>
      <div
        className={styles.banner}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p>{bannerText}</p>
      </div>
    </div>
  );
};

export default MenuItem;
