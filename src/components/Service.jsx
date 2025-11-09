function Service({ title, description, icon }) {
  return (
    <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#" className="">
        Read More
      </a>
    </div>
  );
}

export default Service;
