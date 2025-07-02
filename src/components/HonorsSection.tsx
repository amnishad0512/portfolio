import React from 'react';
import { Award, Star } from 'lucide-react';

interface Award {
  title: string;
  organization: string;
  date: string;
  description: string;
}

const awards: Award[] = [
  {
    title: "Shining Star Award",
    organization: "Inspironlabs Software Systems Pvt Ltd",
    date: "2023-2024",
    description: "Awarded for being a shining star of the Year. Recognized the best in performance and contribution to the team."
  },
];

const HonorsSection = () => {
  return (
    <section id="honors" className="bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-primary">//</span> Honors & Awards
        </h2>
        <div className="h-1 w-24 bg-primary mb-8"></div>
        
        <div className="mx-auto space-y-6">
          {awards.map((award, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg p-6 shadow-sm animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{award.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <span>{award.organization}</span>
                    <span>•</span>
                    <span>{award.date}</span>
                  </div>
                  <p className="text-muted-foreground">{award.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HonorsSection; 