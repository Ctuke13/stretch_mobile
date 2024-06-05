import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    text: "Stretch Mobile has completely changed my life!",
    author: "John Doe",
  },
  {
    text: "I feel more flexible and energized than ever before.",
    author: "Jane Smith",
  },
  {
    text: "The best decision I ever made for my health!",
    author: "Sam Wilson",
  },
  // Add more testimonials as needed
];

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  const goToNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  return (
    <div className="relative w-full py-10 bg-gray-100">
      <div className="flex justify-center items-center">
        <FaArrowLeft
          onClick={goToPrevious}
          className="text-3xl cursor-pointer text-gray-600 hover:text-black mx-2"
        />
        <div className="w-full max-w-4xl p-6 text-center">
          <p className="text-2xl md:text-4xl italic font-serif mb-4">
            &quot;{testimonials[currentSlide].text}&quot;
          </p>
          <p className="text-lg font-bold">
            - {testimonials[currentSlide].author}
          </p>
        </div>
        <FaArrowRight
          onClick={goToNext}
          className="text-3xl cursor-pointer text-gray-600 hover:text-black mx-2"
        />
      </div>
      <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              currentSlide === index ? "bg-black" : "bg-gray-400"
            }`}
            style={{ opacity: currentSlide === index ? 1 : 0.5 }}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
