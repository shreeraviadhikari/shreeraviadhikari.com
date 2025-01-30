// pages/projects.js
import Navbar from "@/commons/Navbar";

export default function Projects() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mt-10">
          Project Portfolio
        </h1>
        <p className="mt-4">
          There are several projects which are public in my Github Profile.
        </p>
        <p className="mt-4">
          Apart from that, there are other professional projects listed here.
        </p>
      </div>
    </div>
  );
}
