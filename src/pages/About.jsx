import { useState, useEffect } from "react";
import SplitSection from "../components/SplitSection";
import Footer from "../components/Footer";
import HorizontalBars from "../components/HorizontalBars";
import { stretch_vid1, stretch_vid2, stretch_vid3 } from "../assets/videos";
import { sm_stretch3, sm_stretch4 } from "../assets/images";

const videos = [stretch_vid1, stretch_vid2, stretch_vid3];

function About() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const videoInterval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 5000); // Change video every 5 seconds

    return () => clearInterval(videoInterval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-5/6 flex justify-center items-center">
        <video
          src={videos[currentVideoIndex]}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center text-white p-10">
        <div className="bg-black bg-opacity-50 p-8 rounded">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            OUR PHILOSOPHY
          </h1>
          <p className="text-2xl md:text-5xl">
            We increase your range of motion gradually
          </p>
        </div>
      </div>
      <div className="flex-grow flex flex-col items-center text-black p-10">
        <HorizontalBars imageOnLeft={true}>
          <SplitSection
            image={sm_stretch3}
            altText="Women stretching clients leg"
            heading="Our Philosophy"
            text="At Stretch Mobile plus Massage, we believe in the profound connection between mind,
          body, and well-being. Our philosophy is rooted in science, compassion, and an
          unwavering commitment to enhancing the lives of our clients. We specialize in
          combining the power of assisted stretching with the soothing benefits of massage,
          creating a unique approach that promotes flexibility, relaxation, and overall health."
            imageOnLeft={true}
          />
        </HorizontalBars>
        <HorizontalBars imageOnLeft={false}>
          <SplitSection
            image={sm_stretch4}
            altText="Description for second image"
            heading="The Science Behind Our Approach"
            text="Research has shown that assisted stretching can significantly improve muscle flexibility, reduce tension, and enhance circulation. When muscles are stretched, they elongate, allowing for a greater range of motion and improved physical performance. However, we take this a step further by integrating massage elements into our stretching routines.
          Massage in a stretched state maximizes the benefits of both practices. The gentle pressure applied during massage helps to break down adhesions and scar tissue, increasing blood flow and delivering essential nutrients to the muscles. This combination not only enhances flexibility, but also accelerates recovery, reduces chronic pain, and fosters a deep sense of relaxation. Our clients often report feeling more limber, energetic, and rejuvenated after just one single session."
            imageOnLeft={false}
          />
        </HorizontalBars>
      </div>
      <Footer />
    </div>
  );
}

export default About;
