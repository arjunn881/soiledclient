import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Music from "./pages/Music";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './styles/App.css'
import BookingForm from "./components/BookingForm";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="app">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/music" element={<Music />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<BookingForm />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
