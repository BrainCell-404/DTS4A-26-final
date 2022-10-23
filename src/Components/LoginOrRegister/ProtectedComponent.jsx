import React, { useEffect } from "react";

import { auth } from "../../Auth/FirebaseAuth";
import { useAuthState } from "react-firebase-hooks/auth";

import { useNavigate } from "react-router-dom";

const ProtectedComponent = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }

    if (!user) {
      navigate("/login");
      return;
    }
  }, [user, loading, navigate]);

  return loading ? <div>Loading...</div> : children;
};

export default ProtectedComponent;
