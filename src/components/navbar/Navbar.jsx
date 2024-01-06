import styles from "./navbar.module.css";
import Links from "./links/links";

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarLogoContainer}>
        <p className={styles.navbarLogoText}>AMERICAN DINER</p>
      </div>
      <div>
        <Links className={styles.navbarLinks} />
      </div>
    </div>
  );
}
