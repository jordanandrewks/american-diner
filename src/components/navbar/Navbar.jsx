import styles from "./Navbar.module.css";
import Links from "./links/Links";
import Image from "next/image";
import Link from "next/link";

// todo incorrect spelling...
export default function Navdar() {
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
          />
        </Link>
      </div>
      <div>
        <Links className={styles.navbarLinks} />
      </div>
    </div>
  );
}
