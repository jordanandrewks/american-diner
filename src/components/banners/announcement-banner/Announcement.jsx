
import { getBannerAnnouncement } from "@/lib/data";
import styles from "./Announcement.module.css";

const AnnouncementBanner = async () => {

  const test = await getBannerAnnouncement();

  console.log(test);

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
