import Head from "next/head";
import styles from "../components/homepage/HomePage.module.css";

export default function Home() {
  return (
    <>
      <Head></Head>
      <div className={styles.hero}>
        <video autoPlay muted loop className={styles.heroVideo}>
          <source src="/videos/hero-video-2024.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        Help
      </div>
      <div className={styles.overlay}></div> {/* Overlay element */}

    </>
  );
}
