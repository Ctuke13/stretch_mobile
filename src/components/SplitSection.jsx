import PropTypes from "prop-types";

function SplitSection({ image, altText, heading, text, imageOnLeft = true }) {
  return (
    <div className="relative flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between py-20 px-10 bg-gray-100 z-10">
      {imageOnLeft ? (
        <>
          <div className="w-full md:w-1/2 p-5 relative">
            <img
              src={image}
              alt={altText}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 text-white p-4">
              {/* <p className="text-lg md:text-xl">{altText}</p> */}
            </div>
          </div>
          <div className="w-full md:w-1/2 p-5">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">{heading}</h2>
            <p className="text-lg md:text-xl">{text}</p>
          </div>
        </>
      ) : (
        <>
          <div className="w-full md:w-1/2 p-5">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">{heading}</h2>
            <p className="text-lg md:text-xl">{text}</p>
          </div>
          <div className="w-full md:w-1/2 p-5 relative">
            <img
              src={image}
              alt={altText}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 text-white p-4">
              {/* <p className="text-lg md:text-xl">{altText}</p> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

SplitSection.propTypes = {
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imageOnLeft: PropTypes.bool,
};

export default SplitSection;
