import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const hello = true;
  const navigate = useNavigate();
  useEffect(() => {
    if (!hello) {
      navigate("/signin", { replace: true });
    }
  }, []);
  return children;
};

export default ProtectedRoutes;
