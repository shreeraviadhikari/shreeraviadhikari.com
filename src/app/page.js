import Navbar from "@/commons/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mt-10">
          Welcome to My Portfolio
        </h1>
        <p className="text-center mt-4">
          This is a simple portfolio website built with Next.js, Redux, and
          Tailwind CSS.
        </p>
      </div>
    </div>
  );
}
