import AboutImg from "../assets/images/about-img.png";

function About() {
  return (
    <div className="py-12 font-montserrat px-4 md:px-6 lg:px-12 max-w-7xl mx-auto" id="about">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-around gap-8 lg:gap-10">
       
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
          <img
            src={AboutImg}
            alt="about img"
            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="font-semibold text-3xl sm:text-4xl mb-4">About us</h2>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg text-justify">
            The "Health & Well-Being Companion" app is designed to empower
            individuals to take charge of their mental and emotional health
            through a seamless, user-friendly interface. It allows users to
            track their daily mood, record reflections, and monitor personal
            habits in a secure and private space. Leveraging the power of AI,
            the app provides personalized suggestions aimed at improving
            well-being, whether it's for enhancing focus, relaxation, or
            achieving a better emotional balance.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
