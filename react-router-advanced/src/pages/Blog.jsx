import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "React Router Basics" },
  { id: 2, title: "Nested Routes in Depth" },
  { id: 3, title: "Protected Routes Made Easy" },
];

export default function Blog() {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Blog Posts</h1>
      <ul className="list-disc pl-5">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              to={`/blog/${post.id}`}
              className="text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
