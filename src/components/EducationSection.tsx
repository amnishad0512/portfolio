import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';

interface ExperienceItem {
  title: string;
  organization: string;
  location: string;
  duration: string;
  description: string[];
  imageUrl: string;
}

const experiences: ExperienceItem[] = [
  {
    title: 'Frontend Engineer',
    organization: 'Your Current Company',
    location: 'Location',
    duration: '2022 - Present',
    imageUrl: '/images/company-logo.png',
    description: [
      'Developed and maintained responsive web applications using React.js and Next.js',
      'Implemented modern UI components using Tailwind CSS and TypeScript',
      'Collaborated with cross-functional teams to deliver high-quality software solutions'
    ]
  },
  {
    title: 'Bachelor of Technology',
    organization: 'Your University',
    location: 'Location',
    duration: '2018 - 2022',
    imageUrl: '/images/university-logo.png',
    description: [
      'Computer Science and Engineering',
      'Relevant coursework: Data Structures, Algorithms, Web Development',
      'Graduated with First Class Honours'
    ]
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Education & Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="mb-12 last:mb-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-6 bg-card rounded-lg p-6 shadow-sm">
                {/* Logo */}
                <div className="w-16 h-16 flex-shrink-0 bg-white rounded-lg p-2 flex items-center justify-center">
                  <Image
                    src={item.imageUrl}
                    alt={`${item.organization} logo`}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <div className="text-lg font-medium text-primary mb-2">
                    {item.organization}
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection; 