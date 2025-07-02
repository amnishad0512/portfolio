import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import HonorsSection from '@/components/HonorsSection';
import RecommendationsSection from '@/components/RecommendationsSection';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Manoj kumar Nishad - MERN Stack Developer';

    // Add intersection observer for section animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    document.querySelectorAll('section').forEach((section) => {
      section.classList.add('section');
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('section').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <HonorsSection />
      <RecommendationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
