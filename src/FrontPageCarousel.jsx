import { useState, useEffect } from "react";

const FrontPageCarousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically go to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval); // Cleanup interval
  }, [slides.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Slide */}
      <div className="relative w-full h-full">
        <img
          src={slides[currentIndex].image}
          alt={slides[currentIndex].caption}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-2xl md:text-4xl font-bold">
            {slides[currentIndex].caption}
          </h2>
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex
                ? "bg-white"
                : "bg-gray-400 hover:bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FrontPageCarousel;
