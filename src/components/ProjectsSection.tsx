import React, { useState } from 'react';
import { ArrowUpRight, Github, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// Sample project data
const projects = [
  {
    id: 1,
    title: 'Discover Your Provider',
    description: 'A full-featured e-commerce platform with product listings, shopping cart, user authentication, and payment integration.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    tags: ['React.js',  'Typescript', 'Material ui', 'Mobx',  'Styled-components', 'Sass', 'Mongodb','Azure'],
    liveLink: '#',
    githubLink: '#',
    category: 'frontend'
  },
  {
    id: 2,
    title: 'HTG Auth Client',
    description: 'A Kanban-style task management application with drag-and-drop functionality and real-time updates.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    tags: ['Next.js', 'Typescript', 'React-hook-form', 'Material-ui', 'Azure', 'Okta', 'Forgerock'],
    liveLink: '#',
    githubLink: '#',
    category: 'frontend'
  },
  {
    id: 3,
    title: 'The Real Feel',
    description: 'We are the first real-time sentiment platform that understands human emotions. The Real Feel allows individuals to track their emotions daily.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    tags: ['Next.js', 'Tailwind', 'Mapbox', 'Redux-toolkit', 'Node.js', 'Express', 'Mongodb', 'Stripe'],
    liveLink: 'https://therealfeel.ai/',
    githubLink: '#',
    category: 'fullstack'
  },
  {
    id: 4,
    title: 'Match',
    description: 'A dedicated matrimonial platform tailored for the Hindu community in Chhattisgarh. The site covers all districts, tehsils, and villages across the state, making matchmaking accessible and culturally specific to every region.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    tags: ['Next.js', 'Typescript', 'Tailwind', '2Factor','React-hook-form', 'Express', 'Mongodb', 'Nodemailer',],
    liveLink: 'https://match.manojnishad.com',
    githubLink: 'https://github.com/amnishad0512/Matrimony',
    category: 'fullstack'
  },
  {
    id: 5,
    title: 'E-Commerce Platform',
    description: 'An online marketplace designed to sell a wide range of electronic products and furniture. The platform aims to offer a user-friendly shopping experience, secure payment options, and efficient delivery services, catering to customers across urban and rural areas.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    tags: ['Next.js', 'Typescript', 'Tailwind', 'Husky', 'React-hook-form', 'React-icons', 'Stripe'],
    liveLink: '#',
    githubLink: 'https://github.com/amnishad0512/santoshi-electric',
    category: 'fullstack'
  }
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { name: 'All Projects', value: 'all' },
    { name: 'Full Stack', value: 'fullstack' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'Backend', value: 'backend' }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
    
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-primary">//</span> My Projects
        </h2>
        <div className="h-1 w-24 bg-primary mb-8"></div>
        <p className="text-lg text-muted-foreground max-w-2xl mb-12">
          Here are some of the projects I've worked on. Each project showcases different skills 
          and technologies from my experience as a MERN stack developer.
        </p>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <Button 
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.value)}
              className="transition-all"
            >
              {filter.name}
            </Button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="project-card bg-card border border-border overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <div className="flex space-x-2">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                      <Github className="h-5 w-5 hover:text-primary transition-colors" />
                    </a>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                      <Link className="h-5 w-5 hover:text-primary transition-colors" />
                    </a>
                  </div>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full group" asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    View Project
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/amnishad0512" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              See More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
