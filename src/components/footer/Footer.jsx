import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.topSectionContainer}>Top</div>
      <div className={styles.middleSectionContainer}>
        <button className={styles.tiktokButton} >
          <Image
            src="/icons/footer/Tiktok-Black-Icon.png"
            width={50}
            height={50}
            alt="tiktok"
          />
        </button>
        <button>Instagram</button>
        <button>Facebook</button>
        <button>Twitter</button>
      </div>
      <div className={styles.bottomSectionContainer}>
        <p className={styles.trademarkText}>
          © American Diner, Inc. 2024. All rights reserved.
        </p>
      </div>
    </div>
  );
}
