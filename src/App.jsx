import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="font-josefin bg-[#f5ecec] text-[#783c67]">
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
