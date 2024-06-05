import "../tailwind.css";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Location from "./pages/Location";
import WhyStretch from "./pages/WhyStretch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/why" element={<WhyStretch />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
