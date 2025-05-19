import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
// import { useAuth } from '../../context/auth';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  

  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API}/api/v1/auth/forgot-password`,
        { email, newPassword, answer }
      );

      // Log the response for debugging
      console.log("Login Response:", res);

      if (res.data.success) {
        toast.success(res.data.message);
       
        
        // Log the location state to check where we're navigating
        console.log("Navigating to:/");

        // Navigate after updating the auth context
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <div className="register">
        <h1>Reset Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your fav color"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={newPassword}
              onChange={(e) => setnewPassword(e.target.value)}
              required
            />
          </div>
     
          <button className="btn btn-primary">Reset</button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
