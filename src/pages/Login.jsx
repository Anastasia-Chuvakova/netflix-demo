import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const { user, logIn } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    //prevent to be submited from every time on page load
    e.preventDefault();
    setErr("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setErr(err.message);
    }
  };
  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://th.bing.com/th/id/R.eb513551a480899bccab61d5a2cf4cf2?rik=BDSxtMjNL3779w&pid=ImgRaw&r=0"
        alt="background image"
      />
      <div className=" bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign In</h1>
            {err ? <p className="p-3 bg-red-600 my-3 rounded">{err}</p> : null}
            <form className="w-full flex flex-col py-4" onSubmit={handleSubmit}>
              <input
                className="p-3 my-2 bg-gray-600 rounded"
                type="email"
                placeholder="Email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className="p-3 my-2 bg-gray-600 rounded"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className="bg-red-600 py-3 my-6 font-bold rounded">
                Sign In
              </button>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember Me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-8">
                <span className="text-gray-400">Not Subscribed? </span>
                <Link to="/Signup">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
