import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-3">User Profile</h1>

      <nav className="flex gap-4 mb-4">
        <Link to="details" className="text-blue-600 hover:underline">
          Profile Details
        </Link>
        <Link to="settings" className="text-blue-600 hover:underline">
          Profile Settings
        </Link>
      </nav>

      {/* Nested routes render here */}
      <Outlet />
    </div>
  );
}
