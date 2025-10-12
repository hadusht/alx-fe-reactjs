import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams(); // Get dynamic part of URL

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Blog Post #{id}</h2>
      <p className="text-gray-600">
        This is a dynamically rendered blog post page for post ID: {id}.
      </p>
    </div>
  );
}

export default BlogPost;
