import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import logo from "../assets/logo.png";

const Signup = () => {
  const { signup, updateUserProfile, googleLogin } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validatePassword = (pass) => {
    return /[A-Z]/.test(pass) && /[a-z]/.test(pass) && pass.length >= 6;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!validatePassword(password)) return toast.error("Password must have uppercase, lowercase, and 6+ characters.");
    try {
      await signup(email, password);
      await updateUserProfile(name, photo);
      toast.success("Account created successfully!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      toast.success("Logged in with Google!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div
      className="w-screen h-screen bg-cover bg-center relative flex justify-center items-center"
      style={{
        backgroundImage: "url('https://i.postimg.cc/ZKPZmh3y/mobile.png')",
      }}
    >
      {/* 🔹 Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 🔹 Signup form */}
      <div className="relative w-full md:w-2/5 max-w-md mx-auto p-8 bg-white/20 backdrop-blur-md shadow-lg rounded-2xl border border-white/30 z-10">
        <Link to="/">
            <img src={logo} alt="Logo" className="h-8 mb-2 mx-auto drop-shadow-lg"/>
        </Link>
        <h2 className="text-3xl font-bold mb-6 text-center text-white drop-shadow">
          Sign Up
        </h2>

        <form className="flex flex-col gap-3" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#60AEA0] placeholder-white"
          />
          <input
            type="text"
            placeholder="Photo URL"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#60AEA0] placeholder-white"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#60AEA0] placeholder-white"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#60AEA0] placeholder-white"
          />
          <button
            type="submit"
            className="bg-[#60AEA0] text-white px-4 py-2 rounded hover:bg-[#378982] transition"
          >
            Sign Up
          </button>
        </form>

        <button
          onClick={handleGoogle}
          className="mt-3 w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Sign Up with Google
        </button>

        <p className="mt-4 text-sm text-center text-white/90">
          Already have an account?{" "}
          <Link to="/login" className="text-white font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
