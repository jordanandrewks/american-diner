import Image from "next/image";
import styles from "./footer.module.css";

export default function Links() {
  const links = [
    {
      src: "/icons/footer/tiktok-white-icon.svg",
      alt: "Tiktok",
    },
    {
      src: "/icons/footer/facebook-64.png",
      alt: "Facebook",
    },
    {
      src: "/icons/footer/icons8-instagram-52.svg",
      alt: "Instagram",
    },
    {
      src: "/icons/footer/icons8-twitterx-50.svg",
      alt: "TwitterX",
    },
  ];

  return (
    <div className={styles.socialContainer}>
      {links.map((link) => (
        <button key={link.alt} className={styles.buttonContainer}>
          <Image
            className={styles.buttonImage}
            src={link.src}
            width={20}
            height={20}
            alt={link.alt}
          />
        </button>
      ))}
    </div>
  );
}
