// pages/contact.js
import Navbar from "@/commons/Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mt-10">Contact Me</h1>
        <p className="text-center mt-4">This is the contact page.</p>
      </div>
    </div>
  );
}
