"use client"

import React, { useState, useEffect } from "react";
import styles from "./EventsContainer.module.css";
import Image from "next/image";

const EventsContainer = ({ eventLinks }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start by fading out
      setIsVisible(false);

      // Change the event after the fade out transition is done
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % eventLinks.length);

        // Fade back in
        setIsVisible(true);
      }, 1000); // This duration should match the CSS transition duration
    }, 4000); // Includes 1s fade out, 1s fade in, and 2s display time

    return () => clearInterval(interval);
  }, [eventLinks.length]);

  const currentEvent = eventLinks[currentIndex];

  return (
    <div className={styles.container}>
      <div>
        <Image
          src={currentEvent.src}
          alt={currentEvent.alt}
          fill={true}
          style={{ objectFit: "cover" }}
          className={styles.imageContainer}
        />
      </div>
      <div className={styles.overlay}></div>
      <div className={styles.textContainer}>
        <p className={styles.eventTitle}>{currentEvent.eventTitle}</p>
        <div className={styles.subTitleContainer}>
          <p>{currentEvent.subTitle1}</p>
          <p>{currentEvent.subTitle2}</p>
        </div>
        <p className={styles.eventDate}>{currentEvent.eventDate}</p>
      </div>
    </div>
  );
};

export default EventsContainer;
