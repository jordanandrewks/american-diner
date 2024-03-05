import Head from "next/head";
import styles from "../components/homepage/HomePage.module.css";

export default function Home() {
  return (
    <>
      <Head>
        {/* <link
          href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
          rel="stylesheet"
        /> */}
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />

      </Head>
      <div className={styles.hero}>
        <video autoPlay muted loop className={styles.heroVideo}>
          <source src="/videos/hero-video-2024.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        Help
      </div>
    </>
  );
}
