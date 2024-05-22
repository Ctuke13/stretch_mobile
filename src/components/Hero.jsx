import { useState } from "react";
// import { FaChevronDown } from "react-icons/fa";
import sm_stretch from "../assets/images/sm_stretch.jpg";
import "../styles/Hero.css";

function Hero() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="w-1/3 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${sm_stretch})` }}
    >
      <div className="absolute top-0 left-0 right-0 text-center text-white p-4">
        {/* <span className="text-yellow-300 text-5xl font-bold p-2 font-NCC1701A">
          Welcome to <br /> Stretch Mobile
        </span> */}
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <div className="cursor-pointer" onClick={toggleExpanded}>
          {/* <FaChevronDown className="text-white text-4xl" /> */}
        </div>
        {isExpanded && (
          <div className="relative inset-0 flex flex-col justify-center items-center text-white m-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              nemo aperiam corrupti impedit, blanditiis sit accusamus ipsum
              molestiae ipsa. Inventore obcaecati officia rem quia accusantium
              ullam similique debitis harum sit!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
