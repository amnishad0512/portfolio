import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Hi, I'm <span className="gradient-text">Manoj Kumar Nishad</span>
            </h1>
            <h3 className="text-xl md:text-2xl font-bold mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              React.js | Next.js | TypeScript | Node.js | Express.js | MongoDB | React Native
            </h3>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
           Building scalable, high-performance web applications with focus on user experience, performance, and frontend architecture.
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
                <a href="https://drive.google.com/file/d/1tGZlepFecqIEvr9_pDUeNpHiS9M8PPqs/view?usp=sharing" target='_blank'>Resume</a>
              </Button>
            </div>
          </div>

          {/* Organic Shape Image Container */}
          <div className="relative flex justify-center items-center animate-fade-up" style={{ animationDelay: '1s' }}>
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              {/* SVG clip path for organic shape */}
              <svg width="0" height="0" className="hidden">
                <defs>
                  <clipPath id="blob-shape">
                    <path d="M393.5,294.5Q373,339,343,378.5Q313,418,264.5,408Q216,398,179,371.5Q142,345,100.5,316Q59,287,45,237.5Q31,188,58,143.5Q85,99,124.5,65.5Q164,32,215.5,28Q267,24,310.5,54Q354,84,384,123.5Q414,163,414,206.5Q414,250,393.5,294.5Z" />
                  </clipPath>
                </defs>
              </svg>

              {/* Background shape with gradient */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-primary/30 via-primary/20 to-transparent" style={{ clipPath: 'url(#blob-shape)' }}></div>
              
              {/* Main image container */}
              <div className="relative w-full h-full" style={{ clipPath: 'url(#blob-shape)' }}>
                {/* Image */}
                <img
                  src="/profile.png"
                  alt="Manoj Kumar Nishad"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent mix-blend-overlay"></div>
              </div>

              {/* Decorative background blob */}
              <div 
                className="absolute -z-10 w-full h-full -bottom-6 -left-6 bg-primary/5"
                style={{ 
                  clipPath: 'url(#blob-shape)',
                  transform: 'scale(1.1) rotate(-10deg)'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
