import Hero from "../components/Hero";
import Form from "../components/Form";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row">
        <Hero />
        <Form />
      </div>
      <Contact />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
