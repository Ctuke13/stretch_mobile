import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div className="bg-white w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row">
        <div className="flex-1 mb-8 lg:mb-0">
          <h1 className="text-black text-2xl font-bold p-2 font-NCC1701A">
            Contact Info
          </h1>
          <div className="flex items-center">
            <FaMapMarkerAlt className="m-5" />
            <span className="text-gray-600">123 Main St, City, Country</span>
          </div>
          <div className="flex items-center">
            <FaPhone className="m-5" />
            <span className="text-gray-600">123-456-7890</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="m-5" />
            <span className="text-gray-600">example@example.com</span>
          </div>
          <div className="flex items-center">
            <FaFacebook className="m-5" />
            <FaInstagram className="m-5" />
          </div>
        </div>
        <div className="flex-1 mb-8 lg:mb-0">
          <h1 className="text-black text-2xl font-bold p-2 font-NCC1701A">
            Hours of Operation
          </h1>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h2 className="text-gray-600">Monday:</h2>
              <span className="text-gray-600">9:00 AM - 5:00 PM</span>
            </div>
            <div className="flex justify-between">
              <h2 className="text-gray-600">Tuesday:</h2>
              <span className="text-gray-600">9:00 AM - 5:00 PM</span>
            </div>
            {/* Add other days here */}
          </div>
        </div>
        <div className="flex-1 m-10">
          <iframe
            title="Google Map"
            className="w-full h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124.00455023818109!2d-122.08218118573446!3d37.4224454525012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858094ea76480b%3A0x7c9c58fe0883d9e!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2suk!4v1634201752699!5m2!1sen!2suk"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
