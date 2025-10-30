import logo from "../assets/images/logo-white.png";
function Footer() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#bde2ea"
          d="m0 160 48 21.3C96 203 192 245 288 224S480 117 576 90.7C672 64 768 96 864 117.3c96 21.7 192 31.7 288 21.4C1248 128 1344 96 1392 80l48-16v256H0Z"
        ></path>
      </svg>
      <footer className="bg-calm-blue">
        <div className="text-center mx-auto">
          <img
            src={logo}
            alt="Mood Tracker logo"
            className="rounded-full w-20 inline-block"
          />
        </div>
        <div className="custom-container grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
          <div>column</div>
          <div>column</div>
          <div>column</div>
        </div>
        <p className="text-center font-light py-5">
          copyright &copy; 2025 Mood Tracker; All rights reserved.{" "}
        </p>
      </footer>
    </>
  );
}

export default Footer;
