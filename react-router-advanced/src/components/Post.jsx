import { useParams } from "react-router-dom";

export default function Post() {
  const { postId } = useParams();
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Post ID: {postId}</h1>
      <p>This is a dynamic route for blog post #{postId} 📰</p>
    </div>
  );
}
