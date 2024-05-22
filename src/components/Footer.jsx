import sm_logo_black from "../assets/images/sm_logo_black.png";

function Footer() {
  return (
    <div className="bg-black flex justify-between items-center px-10 py-6">
      <img src={sm_logo_black} className="w-96 h-64" />
      <div className="text-white flex flex-col">
        <a href="#" className="my-2">
          FAQs
        </a>
        <a href="#" className="my-2">
          Charity
        </a>
        <a href="#" className="my-2">
          Affiliates
        </a>
        <a href="#" className="my-2">
          Careers
        </a>
        <a href="#" className="my-2">
          Terms of Use
        </a>
      </div>
    </div>
  );
}

export default Footer;
