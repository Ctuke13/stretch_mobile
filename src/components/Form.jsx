import sm_logo_transparent from "../assets/images/sm_logo_transparent.png";
import plusMassage_transparent from "../assets/images/plusMassage_transparent.png";

function Form() {
  return (
    <div className="w-2/3 bg-gray-50 h-screen">
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <img
            src={sm_logo_transparent}
            alt="SM Logo"
            className="h-80 w-auto m-8"
          />
          <img
            src={plusMassage_transparent}
            alt="subtitle"
            className="h-24 w-auto"
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
          <form className="mt-4">
            <div className="flex">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 rounded-md py-2 px-3 m-6"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 rounded-md py-2 px-3 m-6"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-md py-2 px-3 m-6"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="border border-gray-300 rounded-md py-2 px-3 m-6"
              />
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
