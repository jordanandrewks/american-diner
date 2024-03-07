import styles from "./announcement.module.css";

const AnnouncementBanner = () => {
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
