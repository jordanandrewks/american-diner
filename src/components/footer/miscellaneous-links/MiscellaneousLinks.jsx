import React from "react";
import Link from "next/link";

import OpenMiscellaneousLinksButton from "./OpenMiscellaneousLinks";

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
    <div >
      {links.map((link) => (
        <Link href={link.path} key={link.title}>
          {link.title}
        </Link>
      ))}
    </div>
  );
}
