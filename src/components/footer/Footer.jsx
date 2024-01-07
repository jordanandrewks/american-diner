import React from "react";
import styles from "./footer.module.css";
import SocialLinks from "./social-links/social-links";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.topSectionContainer}>Top</div>
      <div className={styles.middleSectionContainer}>
        <SocialLinks />
      </div>
      <div className={styles.bottomSectionContainer}>
        <p className={styles.trademarkText}>
          © American Diner, Inc. 2024. All rights reserved.
        </p>
      </div>
    </div>
  );
}
