import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          My Portfolio
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
