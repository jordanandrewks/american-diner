import styles from "./CookieButton.module.css";
import Image from "next/image";

export default function CookieButton() {
  return (
    <div className={styles.container}>
      <button className={styles.cookieButton}>
        <Image
        className={styles.cookieIcon}
          src="/icons/cookies/icons8-cookie-100.png"
          width={48}
          height={48}
          alt="Cookies"
          draggable={false}
        />
      </button>
    </div>
  );
}
