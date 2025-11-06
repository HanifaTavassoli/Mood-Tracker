import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import Navbar from "../components/Navbar";
import bgImg from "../assets/images/bg-image.jpg";
import Swal from "sweetalert2";

function SignUp() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Fields",
        text: "Please fill in all fields.",
        confirmButtonColor: "#06b6d4",
      });
      return;
    }

    const user = {
      name: `${firstName} ${lastName}`,
      email: email,
      password: password,
    };

    localStorage.setItem("userInfo", JSON.stringify(user));

    Swal.fire({
      icon: "success",
      title: "Account Created!",
      text: "🎉 Your account has been created successfully! Please log in to continue.",
      confirmButtonColor: "#06b6d4",
      confirmButtonText: "Go to Login",
    }).then(() => {
      navigate("/login");
    });
  };

  return (
    <div
      className="min-h-screen bg-no-repeat bg-center bg-cover font-montserrat flex flex-row"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Navbar />
      <div className=" basis-3/5 flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-xl mx-auto mt-24">
        <Link
          to="/"
          className="flex items-center justify-start text-neutral-500 mb-4"
        >
          <MdArrowBack className="text-md mr-1" />
          <span>Back</span>
        </Link>

        <h2 className="font-bold text-3xl text-start mb-6">Sign up</h2>

        <form onSubmit={handleSignUp} className=" grid grid-cols-1 gap-5 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
              First name
            </label>
            <input
              id="first-name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              className="mt-1 block w-full rounded-sm bg-white px-3 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-600 sm:text-sm/6"
            />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">
              Last name
            </label>
            <input
              id="last-name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              className="mt-1 block w-full rounded-sm bg-white px-3 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-600 sm:text-sm/6"
            />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
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

          <div className="sm:col-span-3">
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
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
              Sign up
            </button>
          </div>
        </form>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-4">
          <p className="text-gray-500">Already have an account?</p>
          <Link
            to="/login"
            className="text-cyan-700 hover:underline font-medium"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
