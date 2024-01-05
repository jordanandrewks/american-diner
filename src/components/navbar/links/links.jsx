import Link from "next/link";

export default function Links(test) {
  console.log(test);
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
    <div className={test} >
      {links.map((link) => (
        <Link href={link.path} key={link.title}>
          {link.title}
        </Link>
      ))}
    </div>
  );
}
