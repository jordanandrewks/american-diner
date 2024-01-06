import React from "react";
import Link from "next/link";
import styles from "../navbar.module.css";

export default function Links(className) {
  console.log(className);
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Gallery",
      path: "/gallery",
    },
  ];

  return (
    <div className={styles.navbarLinks}>
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.title}
          style={{ flex: "1", display: "flex", justifyContent: "center" }}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}
