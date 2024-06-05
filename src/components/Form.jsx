import { useState } from "react";
import sm_logo_transparent from "../assets/images/sm_logo_transparent.png";
import plusMassage_transparent from "../assets/images/plusMassage_transparent.png";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    city: "",
  });

  const zapierWebhookURL =
    "https://hooks.zapier.com/hooks/catch/1234567/abcdefg"; // Replace with your Zapier webhook URL

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(zapierWebhookURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          city: "",
        });
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form.");
    }
  };

  return (
    <div className="w-full lg:w-1/2 bg-gray-50 lg:h-screen relative z-10 shadow-md">
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <img
            src={sm_logo_transparent}
            alt="SM Logo"
            className="h-80 w-auto mt-6"
          />
          <img
            src={plusMassage_transparent}
            alt="subtitle"
            className="h-14 w-auto"
          />
          <div className="text-center">
            {/* <h2 className="text-3xl text-yellow-500">plus Massage</h2>
            <p className="text-lg text-yellow-500">
              ASSISTED STRETCHING WITH MASSAGE ELEMENTS
            </p> */}
          </div>
          <p className="text-center text-lg my-3">
            A FREE 30min. STRETCH IS WAITING FOR YOU
          </p>
          <p className="text-center">
            By submitting, you authorize Stretch Zone to contact you via email,
            phone, and SMS regarding your request.
          </p>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="flex flex-wrap justify-center">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="border border-gray-300 rounded-md py-2 px-3 m-2"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="border border-gray-300 rounded-md py-2 px-3 m-2"
              />
            </div>
            <div className="flex flex-wrap justify-center">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="border border-gray-300 rounded-md py-2 px-3 m-2"
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-md py-2 px-3 m-2"
              />
            </div>
            <div className="flex flex-wrap justify-center">
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="border border-gray-300 rounded-md py-2 px-3 m-2"
              >
                <option value="">Select a City</option>
                <option value="New York City">New York City</option>
                <option value="Jersey City">Jersey City</option>
                <option value="Newark">Newark</option>
                <option value="Hoboken">Hoboken</option>
                <option value="Stamford">Stamford</option>
                <option value="White Plains">White Plains</option>
                {/* Add more cities as needed */}
              </select>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-yellow-500 text-black py-2 px-4 rounded-full"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
