import Header from "../components/Header";
import Hero from "../components/Hero";
import Form from "../components/Form";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="">
      <Header />
      <div className="flex">
        <Hero />
        <Form />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
