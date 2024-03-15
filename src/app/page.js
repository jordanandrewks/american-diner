import Head from "next/head";
import AnnouncementBanner from "@/components/banners/announcementBanner/announcement";
import styles from "../components/homepage/HomePage.module.css";
import ImageCarousel from "../components/carousel/carousel";

export default function Home() {
  const announcementBanner = false;

  const images = [
    { url: "/logo/navbar-logo.png", alt: "Image 1", caption: "Caption 1" },
    { url: "/logo/navbar-logo.png", alt: "Image 2", caption: "Caption 2" },
    // Add more images as needed
  ];

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
            <p className={styles.overlayText}>EAT</p>{" "}
            {/* make this scroll to the some food*/}
            <p className={styles.overlayText}>DRINK</p>{" "}
            {/* make this scroll to the some drinks*/}
            <p className={styles.overlayText}>VIBES</p>{" "}
            {/* make this scroll to events */}
            <p className={styles.overlayText}>LIVE SPORTS</p>{" "}
            {/* make this scroll to events been shown */}
            <p className={styles.overlayTextBottomText}>
              AMERICAN FOOD & BBQ DONE RIGHT
            </p>{" "}
            {/* make this scroll a place where there's reviews etc. show 5 star food safety etc.  */}
          </div>
        </div>{" "}
        {/* Overlay element */}
      </div>

      {/* A carasoul of some of the foods on offer */}
      {/* add a button for to go the full menu */}
      <div className={styles.test}>
        EAT
        <ImageCarousel images={images} />
      </div>

      {/* Say what drink they offer, but say it has an inbuilt brewery or something */}
      <div>DRINK</div>

      {/* Say What occurs here*/}
      <div>VIBES</div>

      {/* Say they do live sports - show the latest sports. */}
      <div>LIVE SPORTS Viewing</div>
    </>
  );
}
