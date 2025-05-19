import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet, useNavigate } from "react-router-dom";
import Spinner from "../Spinner";
import axios from "axios";

export default function AdminRoute() {
  const [ok, setOK] = useState(false);
  const [auth] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const authCheck = async () => {
      try {
        // Log the auth token being used
        console.log("Auth token:", auth?.token);
        
        // Make sure we're sending the token correctly
        const res = await axios.get(`${import.meta.env.VITE_API}/api/v1/auth/admin-auth`, {
          headers: {
            Authorization: auth?.token ? `Bearer ${auth.token}` : "",
          },
        });
        
        console.log("Auth response:", res.data);
        
        if (res.data.ok) {
          setOK(true);
        } else {
          setOK(false);
        }
      } catch (error) {
        console.error("Auth check error:", error.response?.data || error.message);
        setOK(false);
      }
    };
    
    if (auth?.token) authCheck();
  }, [auth?.token, navigate]);
  return ok ? <Outlet /> : <Spinner path="" />;
}
