"use client";
import styles from "./Announcement.module.css";
// import useFetchBannerAnnouncement from "@/hooks/useFetchBannerAnnouncement";


const AnnouncementBanner = () => {
  // const { announcement, banner, isLoading, error } =
    // useFetchBannerAnnouncement();

  return (
    <div className={styles.container}>
      <div className={styles.scrollContainer}>
        <div className={styles.scrollText}>
          This is your scrolling announcement text. Add more content here as
          needed.
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
