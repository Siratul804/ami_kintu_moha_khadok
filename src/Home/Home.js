import React from "react";
import Header from "../components/Header/Header";
import Why from "../components/Why/Why";
import "./home.css";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Project from "../components/Project/Project";
import Team from "../components/Team/Team";
import Client from "../components/Client/Client";
import Contact from "../components/Contact/Contact";

function Home() {
  return (
    <div className="home">
      <Header />
      <About />
      <Why />
      <Services />
      <Team />
      <Project />
      <Client />
      <Contact />
    </div>
  );
}

export default Home;
