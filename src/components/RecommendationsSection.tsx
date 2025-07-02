import React from 'react';
import { Quote } from 'lucide-react';

interface Recommendation {
  text: string;
  author: string;
  position: string;
  company: string;
}

const recommendations: Recommendation[] = [
  {
    text: "I had the pleasure of working with Manoj on The Realfeel Project, a powerful real-time sentiment tracking platform. Manoj played a crucial role in building the system that enabled users to log daily emotions and visualize them geographically using emojis and text, beautifully integrated with Mapbox GL.His attention to detail, strong problem-solving skills, and collaborative spirit made a significant impact on the project’s success. Manoj is not only technically sound but also brings creativity and thoughtfulness to every aspect of development. I highly recommend him for any team looking for a dedicated and innovative engineer.",
    author: "Dharmesh Sonar",
    position: "Nodejs Developer",
    company: "Inspironlabs Software Systems Pvt Ltd"
  },
  {
    text: "I had the pleasure of working with Manoj on a healthcare project where we collaborated on implementing SSO (Single Sign-On). Manoj worked as a frontend developer, and I must say, his work was consistently impressive. Every task he delivered was not only on time but also error-free. His attention to detail, clean implementation, and deep understanding of frontend development made our integration process smooth and efficient. What stood out the most was his reliability — once a task was assigned, I knew it would be delivered perfectly without the need for follow-ups. Manoj’s professionalism and technical excellence make him a valuable asset to any team.",
    author: "Shakambhari",
    position: "Java Developer",
    company: "Inspironlabs Software Systems Pvt Ltd"
  }
  // Add more recommendations as needed
];

const RecommendationsSection = () => {
  return (
    <section id="recommendations" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-primary">//</span> Recommendations
        </h2>
        <div className="h-1 w-24 bg-primary mb-8"></div>
        
        <div className="mx-auto space-y-6">
          {recommendations.map((rec, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg p-6 shadow-sm animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Quote className="w-8 h-8 text-primary opacity-50" />
                </div>
                <div>
                  <p className="text-lg mb-4 italic">"{rec.text}"</p>
                  <div className="flex flex-col">
                    <span className="font-semibold">{rec.author}</span>
                    <span className="text-muted-foreground">
                      {rec.position} at {rec.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection; 