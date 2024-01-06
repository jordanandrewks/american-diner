import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.topSectionContainer}>Top</div>
      <div className={styles.middleSectionContainer}>
        <div className={styles.socialContainer}>
          <button className={styles.buttonContainer}>
            <Image
              className={styles.buttonImage}
              src="/icons/footer/tiktok-white-icon.svg"
              width={20}
              height={20}
              alt="Tiktok"
            />
          </button>
          <button className={styles.buttonContainer}>
            <Image
              className={styles.buttonImage}
              src="/icons/footer/facebook-64.png"
              width={20}
              height={20}
              alt="Facebook"
            />
          </button>
          <button className={styles.buttonContainer}>
            <Image
              className={styles.buttonImage}
              src="/icons/footer/icons8-instagram-52.svg"
              width={20}
              height={20}
              alt="Instagram"
            />
          </button>
          <button className={styles.buttonContainer}>
            <Image
              className={styles.buttonImage}
              src="/icons/footer/icons8-twitterx-50.svg"
              width={20}
              height={20}
              alt="Twitter X"
            />
          </button>
        </div>
      </div>
      <div className={styles.bottomSectionContainer}>
        <p className={styles.trademarkText}>
          © American Diner, Inc. 2024. All rights reserved.
        </p>
      </div>
    </div>
  );
}
