import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectSections from "../components/ProjectSections";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground/>
      <Navbar/>

      <main>
        <HeroSection/>
        <AboutSection/>
        <SkillsSection/>
        <ProjectSections/>
        <ContactSection/>
      
      </main>
      <Footer/>

    </div>
  );
};

export default Home;
