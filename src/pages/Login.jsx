import Navbar from "../components/navbar";
import bgImg from "../assets/images/bg-image.jpg";
import google from "../assets/images/google.svg";
import { Link } from "react-router-dom";
import { MdArrowForward, MdArrowBack } from "react-icons/md";

function Login() {
  return (
    <div
      className="h-screen bg-no-repeat bg-center bg-cover font-montserrat border border-gray-100"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <Navbar />
      <div className="h-100 mt-[10rem] w-xl mx-auto flex flex-col justify-center gap-5 px-5">
        <Link
          to="/"
          className="flex items-center justify-start text-end text-light text-neutral-500"
        >
          <MdArrowBack className="text-md" />
          <span>Back</span>
        </Link>
        <h2 className="font-bold text-3xl text-start mb-3">Sign in</h2>
        <button className="w-full border rounded-sm mb-3 py-1.5 0 outline-1 -outline-offset-1 outline-gray-300 flex justify-center items-center gap-3">
          <img src={google} alt="google logo" />
          <span className="font-medium text-gray-900"> Google</span>
        </button>
        <hr className="text-gray-300" />
        <form>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-6 ">
            <div className="sm:col-span-full font-montserrat">
              <label
                for="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  name="email"
                  autocomplete="email"
                  placeholder="Enter your Email"
                  className="block w-full rounded-sm bg-white px-3 py-2 shadow-xs text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-full">
              <label
                for="password"
                className="block text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  autocomplete="password"
                  className="block w-full rounded-sm bg-white px-3 py-2 shadow-xs text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-full">
              <button
                type="submit"
                className="text-white w-full font-medium text-lg cursor-pointer bg-cyan-600/80 hover:bg-cyan-600 mx-auto  py-2 px-3 rounded-sm"
              >
                Login
              </button>
            </div>
          </div>
        </form>

        <div className="flex items-center justify-center gap-2">
          <p className="text-gray-500">Don't have an account?</p>
          <Link to="/signup" className=" border-gray-300">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
