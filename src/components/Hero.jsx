import heroImg from "../assets/images/hero-img.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="pt-[5rem] bg-calm-blue font-montserrat">
        <div className=" flex flex-col lg:flex-row items-center justify-center lg:justify-around gap-10 max-w-7xl mx-auto px-4 md:px-6 pt-5 pb-0">
    
          <div className="text-center lg:text-left w-full lg:w-2/5 flex flex-col gap-4">
            <h1 className="font-bold text-xl md:text-2xl lg:text-3xl mb-4">
              Track Your Mood, Improve Your Life with AI!
            </h1>
            <p className="text-base md:text-md lg:text-lg mb-5 text-gray-700">
              Personalized AI suggestions to elevate your mental well-being. Get
              tailored activities and strategies to boost balance, focus, and
              overall mental wellness.
            </p>
            <Link
              to="/moodtracker"
              className="text-white px-4 py-2 w-fit rounded-sm bg-cyan-600/80 hover:bg-cyan-600 transition duration-200 self-center lg:self-start"
            >
              Track Your Mood
            </Link>
          </div>

          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <img
              src={heroImg}
              alt="hero img"
              className="w-full max-w-md lg:max-w-lg h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      <svg
        className="w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#bde2ea"
          d="m0 320 48-42.7C96 235 192 149 288 138.7c96-10.7 192 53.3 288 74.6 96 21.7 192-.3 288-26.6 96-26.7 192-58.7 288-80 96-21.7 192-31.7 240-37.4l48-5.3V0H0Z"
        ></path>
      </svg>
    </>
  );
}

export default Hero;
