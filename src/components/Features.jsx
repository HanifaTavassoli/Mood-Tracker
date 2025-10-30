import numberOne from "../assets/images/features/01.svg";
import numberTwo from "../assets/images/features/02.svg";
import numberThree from "../assets/images/features/03.svg";
import smile from "../assets/images/features/smile.jpg";
import brain from "../assets/images/features/brain.svg";
import faceStates from "../assets/images/features/face-state.png";
function Features() {
  return (
    <div className=" mx-auto py-12">
      <h2 className="text-2xl font-bold mb-20 text-center">
        Empower Your Mental Well-Being
      </h2>
      <div className=" w-5xl grid grid-cols-2 justify-between items-center gap-12 mx-auto">
        <div className="">
          <img src={numberOne} alt="number one" className="mb-4" />
          <h3 className="font-medium text-xl mb-2">Track Your Mood</h3>
          <p className="font-light text-lg">
            Easily log your daily mood and emotions in just a few taps. From
            happy to stressed, our Mood Tracker helps you monitor your emotional
            journey over time.
          </p>
        </div>
        <div className="text-end">
          <img
            src={smile}
            alt="smily face"
            className="w-50 rounded-full border inline-block"
          />
        </div>
        <div className="text-start">
          <img src={brain} alt="smily face" className="w-50 inline-block" />
        </div>
        <div className="">
          <img src={numberTwo} alt="number two" className="mb-4" />
          <h3 className="font-medium text-xl mb-2">AI-Powered Suggestions</h3>
          <p className="font-light text-lg">
            Get personalized, AI-generated suggestions to improve your mental
            well-being. Whether it's taking a break, trying mindfulness, or
            starting a new activity, we provide helpful insights to lift your
            mood.
          </p>
        </div>
        <div className="">
          <img src={numberThree} alt="number three" className="mb-4" />
          <h3 className="font-medium text-xl mb-2">Personalized Insights</h3>
          <p className="font-light text-lg">
            Gain deeper insights into your mental health. Our app analyzes your
            tracked moods and habits, providing personalized feedback to help
            you understand what’s impacting your well-being." Focus on the app's
            ability to give users actionable advice based on their data
          </p>
        </div>
        <div className="text-end">
          <img
            src={faceStates}
            alt="face states"
            className="w-50 inline-block"
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
