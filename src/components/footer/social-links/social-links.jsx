"use-client";

import React from "react";
import styles from "../footer.module.css";
import OpenSocialLinkButton from "./open-social-link-button";

export default function SocialLinks() {
  /*
  
    Add Social Media Links when needed below:

  */
  const links = [
    {
      src: "/icons/footer/tiktok-white-icon.svg",
      alt: "Tiktok",
      url: "https://example.com",
    },
    {
      src: "/icons/footer/facebook-64.png",
      alt: "Facebook",
      url: "https://example.com",
    },
    {
      src: "/icons/footer/icons8-instagram-52.svg",
      alt: "Instagram",
      url: "https://example.com",
    },
    {
      src: "/icons/footer/icons8-twitterx-50.svg",
      alt: "TwitterX",
      url: "https://example.com",
    },
  ];

  return (
    <div className={styles.socialContainer}>
      {links.map((link) => (
        <OpenSocialLinkButton
          key={link.alt}
          linkSrc={link.src}
          linkAlt={link.alt}
          linkUrl={link.url}
        />
      ))}
    </div>
  );
}
