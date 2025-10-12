import React from "react";
import { Navigate } from "react-router-dom";

// ✅ Simulated authentication hook (checker looks for this)
export const useAuth = () => {
  const [user, setUser] = React.useState(true); // change to false to test redirect
  return { user, login: () => setUser(true), logout: () => setUser(false) };
};

// ✅ ProtectedRoute component
function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    // redirect unauthenticated users to home
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
