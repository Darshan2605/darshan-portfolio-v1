"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Certifications from "../components/Certifications";
import Blog from "../components/Blog";
import Contact from "../components/Contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <main>
      <div className="portfolio-layout">
        <Sidebar />
        <div className="main-content">
          <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
          {activeSection === "about" && <About />}
          {activeSection === "resume" && <Resume />}
          {activeSection === "portfolio" && <Portfolio />}
          {activeSection === "certifications" && <Certifications />}
          {activeSection === "blog" && <Blog />}
    
        </div>
      </div>
    </main>
  );
}
