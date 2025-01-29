import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-gray-600 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          <Image src="/logo-white.png" alt="logo" height={200} width={200} />
        </Link>
        <div className="space-x-4">
          <Link href="/about" className="text-white hover:text-gray-200">
            About
          </Link>
          <Link href="/projects" className="text-white hover:text-gray-200">
            Projects
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-200">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
