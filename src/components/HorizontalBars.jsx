import PropTypes from "prop-types";
import classNames from "classnames";

function HorizontalBars({ children, imageOnLeft }) {
  const barClasses = classNames(
    "absolute inset-0 flex flex-col items-center justify-center z-0 w-screen",
    {
      "-left-1/2": !imageOnLeft,
      "-right-1/2": imageOnLeft,
    }
  );

  return (
    <div className="relative w-full">
      <div className={barClasses}>
        <div className="w-full h-20 bg-black"></div>
        <div className="w-full h-12 bg-yellow-500"></div>
        <div className="w-full h-20 bg-black"></div>
        <div className="w-full h-12 bg-yellow-500"></div>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

HorizontalBars.propTypes = {
  children: PropTypes.node.isRequired,
  imageOnLeft: PropTypes.bool.isRequired,
};

export default HorizontalBars;
