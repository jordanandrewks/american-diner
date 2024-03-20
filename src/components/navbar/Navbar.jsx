import styles from "./Navbar.module.css";
import Links from "./links/Links";
import Image from "next/image";
import Link from "next/link";

// todo incorrect spelling...
export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarLogoContainer}>
        <Link href={"/"}>
          <Image
            src="/logo/navbar-logo.png"
            alt="logo"
            width={150}
            height={100}
            draggable={false}
            className={styles.navbarLogo}
            priority  // must load first! This avoids "flash of unstyled content" (FOUC).
          />
        </Link>
      </div>
      <div>
        <Links className={styles.navbarLinks} />
      </div>
    </div>
  );
}
