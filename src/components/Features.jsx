import numberOne from "../assets/images/features/01.svg";
import numberTwo from "../assets/images/features/02.svg";
import numberThree from "../assets/images/features/03.svg";
import smile from "../assets/images/features/smile.jpg";
import brain from "../assets/images/features/brain.svg";
import faceStates from "../assets/images/features/face-state.png";

function Features() {
  return (
    <div className="py-12 px-4 md:px-6 lg:px-12 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12 text-center">
        Empower Your Mental Well-Being
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center">
       
        <div>
          <img src={numberOne} alt="number one" className="mb-4 w-12 h-12 sm:w-16 sm:h-16" />
          <h3 className="font-medium text-xl mb-2">Track Your Mood</h3>
          <p className="font-light text-sm sm:text-base">
            Easily log your daily mood and emotions in just a few taps. From happy to stressed, our Mood Tracker helps you monitor your emotional journey over time.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={smile}
            alt="smily face"
            className="w-40 sm:w-48 lg:w-56 h-auto rounded-full border object-cover"
          />
        </div>

       
        <div className="flex justify-center md:justify-start">
          <img
            src={brain}
            alt="brain"
            className="w-40 sm:w-48 lg:w-56 h-auto object-cover"
          />
        </div>
        <div>
          <img src={numberTwo} alt="number two" className="mb-4 w-12 h-12 sm:w-16 sm:h-16" />
          <h3 className="font-medium text-xl mb-2">AI-Powered Suggestions</h3>
          <p className="font-light text-sm sm:text-base">
            Get personalized, AI-generated suggestions to improve your mental well-being. Whether it's taking a break, trying mindfulness, or starting a new activity, we provide helpful insights to lift your mood.
          </p>
        </div>

        <div>
          <img src={numberThree} alt="number three" className="mb-4 w-12 h-12 sm:w-16 sm:h-16" />
          <h3 className="font-medium text-xl mb-2">Personalized Insights</h3>
          <p className="font-light text-sm sm:text-base">
            Gain deeper insights into your mental health. Our app analyzes your tracked moods and habits, providing personalized feedback to help you understand what’s impacting your well-being. Focus on the app's ability to give users actionable advice based on their data.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={faceStates}
            alt="face states"
            className="w-40 sm:w-48 lg:w-56 h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
