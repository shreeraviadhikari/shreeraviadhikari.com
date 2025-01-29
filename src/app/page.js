import Navbar from "@/commons/Navbar";
import BlogPage from "./blog";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <BlogPage />
      </div>
    </div>
  );
}
