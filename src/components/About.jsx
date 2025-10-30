import AboutImg from "../assets/images/about-img.png";
function About() {
  return (
    <div className="custom-container py-12 font-montserrat" id="about">
      <div className="flex items-center justify-around gap-10">
        <div className="w-1/3">
          <img
            src={AboutImg}
            alt="about img"
            className="h-90 w-100 rounded-full"
          />
        </div>
        <div className="w-1/2 text-start">
          <h2 className="font-semibold text-3xl mb-3">About us</h2>
          <p className="text-justify">
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
