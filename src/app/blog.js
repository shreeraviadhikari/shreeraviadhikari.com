import React from "react";
import Image from "next/image";
import Link from "next/link";
const blogPosts = [
  {
    id: 1,
    title: "One Man Army",
    image: "/1.jpg",
    excerpt:
      "Learn how React components work and how they help in building modular and reusable UIs...",
  },
  {
    id: 2,
    title: "Skibidi",
    image: "/2.jpg",
    excerpt:
      "Tailwind CSS is a utility-first CSS framework that allows rapid UI development with ease...",
  },
  {
    id: 3,
    title: "Reverberating silence",
    image: "/3.jpg",
    excerpt:
      "When Silence is loud, it reverberates through the vaccum. It moves as shockwaves traverse and ripples across the void.",
  },
  {
    id: 4,
    title: "Reverse Polarity",
    image: "/4.jpg",
    excerpt:
      "When Silence is loud, it reverberates through the vaccum. It moves as shockwaves traverse and ripples across the void.",
  },
  {
    id: 5,
    title: "Divine Rampage",
    image: "/5.jpg",
    excerpt:
      "When Silence is loud, it reverberates through the vaccum. It moves as shockwaves traverse and ripples across the void.",
  },
];

const BlogPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">New Wordspills</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-4">
                {post.excerpt.substring(0, 80) + `...`}
              </p>
              <Link
                href={`/blogs/${post.id}/`}
                className="text-gray-500 hover:text-black"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
