import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Subpart from "./components/Subpart";
import Mid from "./components/Mid";
import Create from "./components/Create";
import Connect from "./components/Connect";
import Trusted from "./components/Trusted";
import Card from "./components/Card";
import Footer from "./components/Footer";

const App = () => {
  return <div className="">
    <div className="flex flex-col relative">
    <Navbar />
    <Hero/>
    <Subpart/>
    <Mid/>
    <Create/>
    <Connect/>
    <Trusted/>
    <Card/>
    <Footer/>
    </div>
  </div>;
};

export default App;
