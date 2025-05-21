import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'MERN Stack Developer';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      // Keep the cursor blinking after typing is complete
      const timeout = setTimeout(() => {
        setShowCursor((prev) => !prev);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Hi, I'm <span className="gradient-text">Manoj Nishad</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <span>{typedText}</span>
            {showCursor && <span className="typing-cursor"></span>}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            I build modern, responsive web applications with a focus on performance, scalability, and user experience. I specialize in developing clean, efficient code and delivering reliable, high-quality digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <Button size="lg" className="group" asChild>
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://drive.google.com/file/d/1w5fdwuu57mvdQF44xIHNvmvAHHzPuZMS/view?usp=drive_link" target='_blank'>Resume</a>
            </Button>
          </div>
        </div>

        {/* Tech stack icons */}
        {/* <div className="mt-16 flex flex-wrap gap-8 justify-start items-center animate-fade-up" style={{ animationDelay: '1s' }}>
          {['MongoDB', 'Express', 'React', 'Node.js'].map((tech, index) => (
            <div key={tech} className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
              <div className="h-12 w-12 bg-secondary rounded-md flex items-center justify-center mb-2">
                <span className="text-primary font-mono font-bold">{tech.charAt(0)}</span>
              </div>
              <span className="text-sm text-muted-foreground">{tech}</span>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
