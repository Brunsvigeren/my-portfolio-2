import React from "react";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import About from "./components/about/About";
import What_I_do from "./components/what_i_do/What_I_do";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <What_I_do />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
