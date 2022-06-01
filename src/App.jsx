import React from "react";
import Navigation from "./components/navigation/Navigation";
import Header from "./components/header/Header";
import About from "./components/about/About";
import What_I_do from "./components/what_i_do/What_I_do";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navigation/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <What_I_do />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
