import React from "react";
import Link from "next/link";
import styles from "../navbar.module.css";

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

export default function Links(className) {
  // todo - add open, isOpen for hamburger menu ( if we need it... )
  const session = false;
  const isAdmin = false;

  return (
    <div className={styles.navbarLinks}>
      {links.map((link) => (
        <Link href={link.path} key={link.title} className={styles.navbarLink}>
          {link.title}
        </Link>
      ))}
      {session ? (
        <div className={styles.navbarUserContainer}>
          {isAdmin && (
            <Link href="/" key={"admin"} className={styles.navbarLink}>
              ADMIN
            </Link>
          )}
          <button>Logout</button>
        </div>
      ) : (
        <div>Login</div>
      )}
    </div>
  );
}

/* todo position the Admin and Login to the right side*/
