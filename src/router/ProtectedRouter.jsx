import React from "react";
import { Navigate, useLocation } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";

const ProtectedRouter = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  // While checking auth, show loading text
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold">Checking authentication...</p>
      </div>
    );
  }

  // If no user → redirect to login page
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If user logged in → show the protected component
  return children;
};

export default ProtectedRouter;
