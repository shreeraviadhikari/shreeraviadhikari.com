import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className=" p-2 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="">
          <Image src="/logo-black.png" alt="logo" height={200} width={200} />
        </Link>
        <div className="space-x-8">
          <Link
            href="/about"
            className="text-xl text-gray-500 hover:text-black"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-xl text-gray-500 hover:text-black"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-xl text-gray-500 hover:text-black"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
