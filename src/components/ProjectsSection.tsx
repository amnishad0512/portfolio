import React, { useState } from 'react';
import { ArrowUpRight, Github, Link, TagIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const projects = [
  {
    id: 0,
    title: 'Shine Candidate Platform',
    description:
      'Improved user journeys and conversion by redesigning login, registration, profile, and job search on a large-scale job platform.',
    tags: [
      'React.js',
      'Next.js',
      'TypeScript',
      'React Native',
      'Redux Toolkit',
      'REST API'
    ],
    liveLink: 'https://www.shine.com',
    category: 'frontend',
    image:"/shine.png"
  },

  {
    id: 1,
    title: 'SSO Integration Platform (DYP & DYD)',
    description:
      'Implemented multi-IDP SSO using OpenID Connect enabling secure access across applications and third-party tools.',
    tags: [
      'React.js',
      'TypeScript',
      'MobX',
      'Material UI',
      'OpenID Connect',
      'Azure AD',
      'Okta',
      'ForgeRock'
    ],
    liveLink: '',
    category: 'fullstack',
    image:"/dyp.png"
  },

  {
    id: 2,
    title: 'SSO Controller Platform (HTG Auth Client)',
    description:
      'Built centralized authentication system to configure multiple IDPs and manage dynamic authentication flows.',
    tags: [
      'React.js',
      'TypeScript',
      'Context API',
      'React Hook Form',
      'Yup',
    ],
    liveLink: '',
    category: 'frontend',
    image:"/dyp.png"
  },

  {
    id: 3,
    title: 'Vendora – E-commerce Platform',
    description:
      'Developed full-stack e-commerce platform with checkout, payments, and scalable order management.',
    tags: [
      'React.js',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Razorpay'
    ],
    liveLink: 'https://vendora.manojnishad.in/',
    githubLink: 'https://github.com/amnishad0512/vendora',
    category: 'fullstack',
    image:"./vendora.png"
  },

  {
    id: 4,
    title: 'RealFeel – Sentiment Platform',
    description:
      'Built real-time emotion tracking platform with map-based visualization and optimized UI performance.',
    tags: [
      'Next.js',
      'TypeScript',
      'Redux Toolkit',
      'Mapbox',
      'Node.js',
      'MongoDB'
    ],
    liveLink: '',
    category: 'fullstack',
    image:"./realfeel.png"
  },

  {
    id: 5,
    title: 'Portfolio Website',
    description:
      'Designed responsive portfolio with modern UI, smooth navigation, and performance-focused architecture.',
    tags: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
    ],
    liveLink: 'https://manojnishad.in',
    githubLink: 'https://github.com/amnishad0512/portfolio',
    category: 'frontend',
    image: '/portfolio.png'
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
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-primary">//</span> My Projects
        </h2>
        <div className="h-1 w-24 bg-primary mb-8"></div>
        <p className="text-lg text-muted-foreground max-w-2xl mb-12">
          A selection of projects demonstrating experience in building scalable, high-performance applications, including production systems, authentication platforms, and full-stack solutions.
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
                    {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                      <Github className="h-5 w-5 hover:text-primary transition-colors" />
                    </a>}

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
              {project.liveLink && <CardFooter>
                <Button variant="outline" className="w-full group" asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    View Project
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </Button>
              </CardFooter>}
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
