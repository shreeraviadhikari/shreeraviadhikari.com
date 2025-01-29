import Link from "next/link";
import Image from "next/image";

const navs = [
  {
    href: "/about",
    display: "About",
  },
  {
    href: "/projects",
    display: "Projects",
  },
  {
    href: "/contact",
    display: "Contact",
  },
];

export default function Navbar() {
  return (
    <nav className=" p-2 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="">
          <Image src="/logo-black.png" alt="logo" height={200} width={200} />
        </Link>
        <div className="space-x-8">
          {navs.map((nav) => (
            <Link
              key={nav.display}
              href={nav.href}
              className="text-xl mb-2 px-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              {nav.display}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
