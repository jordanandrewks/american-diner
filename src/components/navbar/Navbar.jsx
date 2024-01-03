import styles from "./navbar.module.css";
import Links from "./links/links";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div>Logo Here</div>
      <div>
        <Links />
      </div>
    </div>
  );
}
