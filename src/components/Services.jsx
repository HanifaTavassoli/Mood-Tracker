import brain from "../assets/images/services/brain_plus.svg";
import head from "../assets/images/services/head.svg";
import headDouble from "../assets/images/services/head_double.svg";

function Services() {
  return (
    <div className="bg-blue-light py-12 font-montserrat" id="services">
      <div className="px-4 md:px-6 lg:px-12 max-w-7xl mx-auto">
        <h2 className="font-bold text-2xl sm:text-3xl mb-2 text-center lg:text-left">Our Services</h2>
        <p className="mb-10 text-center lg:text-left text-gray-700">
          Discover the wide range of services we offer to meet your needs.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center space-y-4 hover:shadow-lg transition-shadow duration-300">
            <img src={brain} alt="brain img" className="w-20 h-20 sm:w-24 sm:h-24" />
            <h3 className="font-bold text-lg sm:text-xl text-center">Depression Therapy</h3>
            <p className="text-sm sm:text-base text-center text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.
            </p>
            <a href="#" className="text-cyan-600 hover:underline font-medium">Read More</a>
          </div>

          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center space-y-4 hover:shadow-lg transition-shadow duration-300">
            <img src={headDouble} alt="brain img" className="w-20 h-20 sm:w-24 sm:h-24" />
            <h3 className="font-bold text-lg sm:text-xl text-center">Depression Therapy</h3>
            <p className="text-sm sm:text-base text-center text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.
            </p>
            <a href="#" className="text-cyan-600 hover:underline font-medium">Read More</a>
          </div>

          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center space-y-4 hover:shadow-lg transition-shadow duration-300">
            <img src={head} alt="brain img" className="w-20 h-20 sm:w-24 sm:h-24" />
            <h3 className="font-bold text-lg sm:text-xl text-center">Depression Therapy</h3>
            <p className="text-sm sm:text-base text-center text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.
            </p>
            <a href="#" className="text-cyan-600 hover:underline font-medium">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
