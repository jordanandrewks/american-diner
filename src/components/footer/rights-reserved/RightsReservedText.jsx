import styles from "../Footer.module.css";
import RightsReservedYear from "./RightsReservedYear";

export default function RightsReserved() {
  return (
    <>
      <p className={styles.trademarkText}>
        © American Diner, Inc. <RightsReservedYear />. All rights reserved.
      </p>
    </>
  );
}
