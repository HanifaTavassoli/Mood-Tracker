import heroImg from "../assets/images/hero-img.jpg";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <>
      <div className="pt-[7rem] bg-calm-blue font-montserrat">
        {/* <div className="flex lg:flex-row items-center justify-center gap-10 border ">
          <div className="">
            <h1 className="font-bold text-3xl mb-3">
              Track Your Mood, Improve Your Life with AI!
            </h1>
            <p className="text-lg mb-5">
              Personalized AI suggestions to elevate your mental well-being. Get
              personalized AI suggestions designed to improve your mental
              well-being, offering tailored activities and strategies to boost
              balance and focus.
            </p>
            <Link
              to="/signup"
              className="bg-white px-3 py-2 rounded-sm border-gray-300"
            >
              Get Started
            </Link>
          </div>
          <div className="">
            <img src={heroImg} alt="hero img" className="w-[700px]" />
          </div>
        </div> */}
        <div className="flex flex-col lg:flex-row items-center justify-around gap-10 w-7xl mx-auto py-6">
          <div className="text-center flex flex-col lg:text-left w-2/3">
            <h1 className="font-bold text-5xl mb-4">
              Track Your Mood, Improve Your Life with AI!
            </h1>
            <p className="text-lg mb-5">
              Personalized AI suggestions to elevate your mental well-being. Get
              tailored activities and strategies to boost balance, focus, and
              overall mental wellness.
            </p>
            <Link
              to="/signup"
              className=" text-white px-6 py-3 w-fit rounded-sm bg-cyan-600/80 hover:bg-cyan-600 transition duration-200"
            >
              Get Started
            </Link>
          </div>
          <div className=" lg:w-[700px] w-1/3">
            <img
              src={heroImg}
              alt="hero img"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#bde2ea"
          d="m0 320 48-42.7C96 235 192 149 288 138.7c96-10.7 192 53.3 288 74.6 96 21.7 192-.3 288-26.6 96-26.7 192-58.7 288-80 96-21.7 192-31.7 240-37.4l48-5.3V0H0Z"
        ></path>
      </svg>
    </>
  );
}

export default Hero;
