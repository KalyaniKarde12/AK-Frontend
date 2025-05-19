import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Spinner from "../Spinner";
import axios from "axios";

const Private = () => {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authCheck = async () => {
      try {
        // Make sure we're using the user-auth endpoint for regular users
        const res = await axios.get(`${import.meta.env.VITE_API}/api/v1/auth/user-auth`, {
          headers: {
            Authorization: `Bearer ${auth?.token}`
          }
        });
        setOk(res.data.ok);
      } catch (err) {
        console.log("Auth error:", err);
        setOk(false);
      } finally {
        setLoading(false);
      }
    };

    if (auth?.token) {
      authCheck();
    } else {
      setLoading(false);
    }
  }, [auth?.token]);

  if (loading) return <Spinner />;

  if (!auth?.token || !ok) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return <Outlet />;
};

export default Private;