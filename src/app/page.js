import Head from "next/head";
import AnnouncementBanner from "@/components/banners/announcementBanner/announcement";
import styles from "../components/homepage/HomePage.module.css";

export default function Home() {
  const announcementBanner = true;

  return (
    <>
      <Head></Head>
      {/* Announcements on the homepage only. */}
      {announcementBanner && <AnnouncementBanner />}
      <div className={styles.hero}>
        <video autoPlay muted loop className={styles.heroVideo}>
          <source src="/videos/hero-video-2024.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.overlay}>
          <div className={styles.overlayContainer}>
            <p className={styles.overlayText}>EAT</p>         {/* make this scroll to the some food*/}
            <p className={styles.overlayText}>DRINK</p>       {/* make this scroll to the some drinks*/}
            <p className={styles.overlayText}>VIBES</p>       {/* make this scroll to events */}
            <p className={styles.overlayText}>LIVE SPORTS</p> {/* make this scroll to events been shown */}
            <p className={styles.overlayTextBottomText}>AMERICAN FOOD & BBQ DONE RIGHT</p>  {/* make this scroll a place where there's reviews etc. show 5 star food safety etc.  */}
          </div>
        </div>{" "}
        {/* Overlay element */}
      </div>

      <div>Hello</div>
    </>
  );
}
