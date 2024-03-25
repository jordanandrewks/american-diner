"use client";
// import test from "@/pages/api/test/test";
import styles from "./Announcement.module.css";
import useFetchBannerAnnouncement from "@/hooks/useFetchBannerAnnouncement";

const AnnouncementBanner = () => {
  const { announcement, banner, isLoading, error } =
    useFetchBannerAnnouncement();

  console.log(announcement, banner, isLoading, error);

  return banner ? (
    <div className={styles.container}>
      <div className={styles.scrollContainer}>
        <div className={styles.scrollText}>{announcement}</div>
      </div>
    </div>
  ) : null;
};

export default AnnouncementBanner;
