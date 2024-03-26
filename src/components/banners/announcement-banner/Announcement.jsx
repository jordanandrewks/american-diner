"use client"

import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import styles from "./Announcement.module.css";
import useFetchBannerAnnouncement from "@/hooks/useFetchBannerAnnouncement";

const AnnouncementBanner = () => {
  const { announcement, banner, isLoading, error } = useFetchBannerAnnouncement();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (banner) {
      setShowBanner(true); // Show the banner if `banner` is truthy
    }
  }, [banner]); // This effect runs whenever `banner` changes

  console.log(announcement, banner, isLoading, error);

  const containerClass = showBanner ? `${styles.container} ${styles.show}` : styles.container;

  return (
    <div className={containerClass}>
      <div className={styles.scrollContainer}>
        <div className={styles.scrollText}>{announcement}</div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
