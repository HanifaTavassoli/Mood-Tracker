import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import Navbar from "../components/Navbar";
import bgImg from "../assets/images/bg-image.jpg";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("userInfo"));

    if (!storedUser) {
      Swal.fire({
        icon: "info",
        title: "No account found",
        text: "Please sign up first!",
        confirmButtonColor: "#06b6d4",
        confirmButtonText: "Go to Sign Up",
      }).then(() => navigate("/signup"));
      return;
    }

    if (storedUser.email === email && storedUser.password === password) {
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: `Welcome back, ${storedUser.name}!`,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        // confirmButtonColor: "#06b6d4",
      }).then(() => navigate("/moodtracker"));
    } else {
      Swal.fire({
        icon: "error",
        title: "Incorrect Credentials",
        text: "Email or password is incorrect. Please try again.",
        confirmButtonColor: "#06b6d4",
      });
    }
  };

  return (
    <div
      className="border-2 border-red-500 min-h-screen bg-no-repeat bg-center bg-cover font-montserrat flex flex-row"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Navbar />
      <div className=" basis-2/5 flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto mt-24">
        <Link
          to="/"
          className="flex items-center justify-start text-neutral-500 mb-4"
        >
          <MdArrowBack className="text-md mr-1" />
          <span>Back</span>
        </Link>

        <h2 className="font-bold text-3xl text-start mb-6">Login</h2>

        <form
          onSubmit={handleLogin}
          className=" grid grid-cols-1 gap-5 sm:grid-cols-6"
        >
          <div className="sm:col-span-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-1 block w-full rounded-sm bg-white px-3 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-600 sm:text-sm/6"
            />
          </div>

          <div className="sm:col-span-full">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-1 block w-full rounded-sm bg-white px-3 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-600 sm:text-sm/6"
            />
          </div>

          <div className="sm:col-span-full">
            <button
              type="submit"
              className="w-full text-white bg-cyan-600 hover:bg-cyan-700 py-2 px-4 rounded-sm font-medium"
            >
              Login
            </button>
          </div>
        </form>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-4">
          <p className="text-gray-500">Don't have an account?</p>
          <Link
            to="/signup"
            className="text-cyan-700 hover:underline font-medium"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
