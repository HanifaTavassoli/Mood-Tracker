import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userInfo"));
    setUser(storedUser);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("userInfo");
    setUser(null);

    Swal.fire({
      icon: "success",
      title: "Signed Out",
      text: "You have successfully signed out!",
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 3000,
    }).then(() => navigate("/signup"));
  };

  const handleMoodTrackerClick = () => {
    const storedUser = JSON.parse(localStorage.getItem("userInfo"));

    if (storedUser && user) {
      // کاربر SignUp کرده و لاگین است → MoodTracker
      navigate("/moodtracker");
    } else if (storedUser && !user) {
      // کاربر SignUp کرده ولی لاگین نیست → Login
      Swal.fire({
        icon: "info",
        title: "Login Required",
        text: "Please login to access Mood Tracker",
        confirmButtonColor: "#06b6d4",
        confirmButtonText: "Go to Login",
      }).then(() => navigate("/login"));
    } else {
      // کاربر SignUp نکرده → SignUp
      Swal.fire({
        icon: "info",
        title: "Sign Up Required",
        text: "You need to create an account first!",
        confirmButtonColor: "#06b6d4",
        confirmButtonText: "Go to Sign Up",
      }).then(() => navigate("/signup"));
    }
  };

  return (
    <nav className="flex items-center justify-center w-auto rounded-full px-3 mx-auto lg:shadow-md lg:shadow-sky-500/50 bg-white text-black lg:fixed lg:left-1/2 lg:transform lg:-translate-x-1/2 mt-3 font-montserrat">
      <div className="hidden lg:flex">
        <NavLink to="/" className="mr-3">
          <span className="sr-only">Mood Tracker</span>
          <img src={logo} alt="logo" className="w-16 rounded-full" />
        </NavLink>
      </div>

      <div className="hidden lg:flex w-full justify-center">
        <ul className="flex items-center justify-around w-full lg:gap-x-12">
          <li>
            <NavLink
              to="/"
              className="text-black px-4 py-2 hover:text-cyan-600 transition-colors duration-300"
            >
              Home
            </NavLink>
          </li>

          <li>
            <button
              onClick={handleMoodTrackerClick}
              className="text-black px-4 py-2 hover:text-cyan-600 transition-colors duration-300"
            >
              Mood Tracker
            </button>
          </li>

          <li>
            {!user ? (
              localStorage.getItem("userInfo") ? (
                <NavLink
                  to="/login"
                  className="px-4 py-2 cursor-pointer rounded-full bg-cyan-600 hover:bg-cyan-700 text-white transition-colors duration-300"
                >
                  Login
                </NavLink>
              ) : (
                <NavLink
                  to="/signup"
                  className="px-4 py-2 cursor-pointer rounded-full bg-cyan-600 hover:bg-cyan-700 text-white transition-colors duration-300"
                >
                  Sign Up
                </NavLink>
              )
            ) : (
              <button
                onClick={handleSignOut}
                className="px-4 py-2 cursor-pointer rounded-full bg-cyan-600 hover:bg-cyan-700 text-white transition-colors duration-300"
              >
                Sign Out
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
