import React from "react";
import Link from "next/link";
import styles from "../navbar.module.css";

export default function Links(className) {
  console.log(className);
  const links = [
    {
      title: "HOME",
      path: "/",
    },
    {
      title: "ABOUT",
      path: "/about",
    },
    {
      title: "CONTACT",
      path: "/contact",
    },
    {
      title: "GALLERY",
      path: "/gallery",
    },
  ];

  return (
    <div className={styles.navbarLinks}>
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.title}
          className={styles.navbarLink}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}
