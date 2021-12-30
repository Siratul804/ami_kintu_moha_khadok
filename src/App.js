import "./App.css";
import Home from "./Home/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Project from "./components/Project/Project";
import Team from "./components/Team/Team";
import Client from "./components/Client/Client";
import Contact from "./components/Contact/Contact";
import Video from "./components/Video/Video";
import Footer from "./components/Footer/Footer";

import ScrollToTop from "./ScrollToTop";

import ToTop from "./components/ToTop/ToTop";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/team" element={<Team />} />
        <Route path="/client" element={<Client />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/video" element={<Video />} />
      </Routes>
      <Footer />
      <ToTop />
    </div>
  );
}

export default App;
