import brain from "../assets/images/services/brain_plus.svg";
import head from "../assets/images/services/head.svg";
import headDouble from "../assets/images/services/head_double.svg";

function Services() {
  return (
    <div className="bg-blue-light py-12 font-montserrat" id="services">
      <div className="p-5 custom-container">
        <h2 className="font-bold text-2xl mb-2">Our services</h2>
        <p className="mb-10">
          Discover the wide range of servivces we offer to meet your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
            <img src={brain} alt="brain img" />
            <h3 className="font-bold">Depression Therapy</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusant doloremqe laudantium.
            </p>
            <a href="#" className="">
              Read More
            </a>
          </div>
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
            <img src={headDouble} alt="brain img" />
            <h3 className="font-bold">Depression Therapy</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusant doloremqe laudantium.
            </p>
            <a href="#" className="">
              Read More
            </a>
          </div>
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
            <img src={head} alt="brain img" />
            <h3 className="font-bold">Depression Therapy</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusant doloremqe laudantium.
            </p>
            <a href="#" className="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
