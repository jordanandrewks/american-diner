import styles from "./footer.module.css";
import SocialLinks from "./social-links/social-links";
import RightsReserved from "./rights-reserved/RightsReservedText";
import MiscellaneousLinks from "./miscellaneous-links/MiscellaneousLinks";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.topSectionContainer}>
        <MiscellaneousLinks />
      </div>
      <div className={styles.middleSectionContainer}>
        <SocialLinks />
      </div>
      <div className={styles.bottomSectionContainer}>
        <RightsReserved />
      </div>
    </div>
  );
}
