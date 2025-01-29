import Navbar from "@/commons/Navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mt-10">About Me</h1>
        <p className="text-center mt-4">This is the about page.</p>
      </div>
    </div>
  );
}
