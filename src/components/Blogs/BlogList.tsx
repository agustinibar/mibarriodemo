"use client";

import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/utils/blogs";

export default function BlogList() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post) => (
        <Link key={post.id} href={`/blogs/${post.id}`} passHref>
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer overflow-hidden">
            {post.image && (
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{post.description}</p>
              <div className="mt-4 text-xs text-gray-500">
                {post.author} — {post.date}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
