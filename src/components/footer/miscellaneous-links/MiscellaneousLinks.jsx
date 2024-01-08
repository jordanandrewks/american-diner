import React from "react";
import Link from "next/link";
import styles from "./miscellaneousLinks.module.css";

export default function MiscellaneousLinks() {
  const links = [
    {
      title: "Terms",
      path: "/terms",
    },
    {
      title: "Privacy",
      path: "/privacy",
    },
    {
      title: "Cookie Policy",
      path: "/cookie",
    },
    {
      title: "Accessibility",
      path: "/accessibility",
    },
  ];

  return (
    <div className={styles.container}>
      {links.map((link) => (
        <Link href={link.path} key={link.title} className={styles.pageLink}>
          {link.title}
        </Link>
      ))}
    </div>
  );
}
