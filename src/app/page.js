"use client";

import Head from "next/head";
import AnnouncementBanner from "@/components/banners/announcement-banner/Announcement";
import styles from "../components/homepage/HomePage.module.css";
import VideoPlayer from "@/components/homepage/video-player/VideoPlayer";
import EatSection from "@/components/homepage/sections/eat-section/EatSection";
import DrinkSection from "@/components/homepage/sections/drink-section/DrinkSection";
import VibesSection from "@/components/homepage/sections/vibes-section/VibesSection";
import LiveSportsSection from "@/components/homepage/sections/live-sports-section/LiveSportsSection";

export default function Home() {
  const announcementBanner = false;

  return (
    <>
      <Head>
        <link rel="preload" href="/logo/navbar-logo.png" as="style">
          {" "}
        </link>
      </Head>
      {/* Announcements on the homepage only. */}
      {announcementBanner && <AnnouncementBanner />}
      <div className={styles.hero}>
        <VideoPlayer src="/videos/hero-video-2024.mp4" />
        <div className={styles.overlay}>
          <div className={styles.overlayContainer}>
            <p className={styles.overlayText}>EAT</p>
            {/* make this scroll to the some food*/}
            <p className={styles.overlayText}>DRINK</p>
            {/* make this scroll to the some drinks*/}
            <p className={styles.overlayText}>VIBES</p>
            {/* make this scroll to events */}
            <p className={styles.overlayText}>LIVE SPORTS</p>
            {/* make this scroll to events been shown */}
            <p className={styles.overlayTextBottomText}>
              AMERICAN FOOD & BBQ DONE RIGHT
            </p>
            {/* make this scroll a place where there's reviews etc. show 5 star food safety etc.  */}
          </div>
        </div>
        {/* Overlay element */}
      </div>

      <EatSection />
      <DrinkSection />
      <VibesSection />
      <LiveSportsSection />

      <div>Google live location</div>
    </>
  );
}
