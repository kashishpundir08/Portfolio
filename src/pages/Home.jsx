import React, { useState, useEffect } from "react";
import myImage from "../assets/myImage.jpg";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Home = () => {
  let navigate = useNavigate();

  const handleExplore = () => {
    navigate("/project");
  };

  // rotating titles
  const titles = ["Java Full Stack Developer", "Software Engineer", "Web Developer"];
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen bg-gray-100 px-6 lg:px-20 py-10">
      
      {/* Left Side - Text */}
      <div className="text-center lg:text-left max-w-xl mt-8 lg:mt-0">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Hi, I’m <span className="text-indigo-600">Kashish Pundir</span>
        </h1>

        <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 h-10 mb-4 transition-all duration-500 ease-in-out">
          {titles[currentTitle]}
        </h2>

        <p className="text-base lg:text-lg text-gray-600 mb-6">
          I enjoy building responsive web applications with{" "}
          <span className="font-semibold text-indigo-600">React</span>,{" "}
          <span className="font-semibold text-indigo-600">Tailwind CSS</span>, and modern Java tools.  
          Currently, I’m sharpening my skills and working on projects to land an{" "}
          <span className="font-semibold">internship & placement opportunity</span>.
        </p>

        <button
          onClick={handleExplore}
          className="flex gap-2.5 px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition"
        >
          <ExternalLink className="w-4 h-4" /> Explore More
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="flex-shrink-0">
        <img
          src={myImage}
          alt="Home Banner"
          className="w-72 h-96 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default Home;
