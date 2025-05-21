import React from 'react';
import { Code, Database, Layers, Globe, Server, Terminal } from 'lucide-react';

// Import specific icons for each technology
import { 
  Blocks, // React
  FileJson, // JavaScript
  FileType, // TypeScript
  FileCode2, // HTML/CSS
  Combine, // Redux
  ArrowRightLeft, // Next.js
  Server as ServerIcon, // Node.js
  Router, // Express
  Database as DatabaseIcon, // MongoDB
  Cable, // REST APIs
  Network, // GraphQL
  Shield, // Auth & Security
  Github, // Git & GitHub
  Container, // Docker
  Cloud, // AWS
  Bug, // Testing
  Workflow, // CI/CD
  Users, // Agile
  Paintbrush, // Tailwind CSS
  Layers as MUIIcon, // Material UI
  BoxSelect, // Redux Toolkit
  ScrollText, // SASS/LESS
  Scissors, // CSS-in-JS
  Component, // Styled Components
  Code2, // Mongoose
  KeyRound, // SSO
  CheckCircle, // Data Validation
  GitBranch, // Gitlab
  Brain, // Data Structures & Algorithms
} from 'lucide-react';

// Tech skills with icons
const skills = [
  {
    category: 'Frontend',
    icon: <Layers className="w-6 h-6 text-primary" />,
    technologies: [
      { name: 'React.js', icon: <Blocks className="w-5 h-5 text-blue-500" /> },
      { name: 'JavaScript (ES6+)', icon: <FileJson className="w-5 h-5 text-yellow-400" /> },
      { name: 'TypeScript', icon: <FileType className="w-5 h-5 text-blue-600" /> },
      { name: 'HTML5 & CSS3', icon: <FileCode2 className="w-5 h-5 text-orange-500" /> },
      { name: 'Redux', icon: <Combine className="w-5 h-5 text-purple-500" /> },
      { name: 'Redux Toolkit', icon: <BoxSelect className="w-5 h-5 text-purple-600" /> },
      { name: 'Next.js', icon: <ArrowRightLeft className="w-5 h-5 text-gray-200" /> },
      { name: 'Tailwind CSS', icon: <Paintbrush className="w-5 h-5 text-cyan-400" /> },
      { name: 'Material UI', icon: <MUIIcon className="w-5 h-5 text-blue-400" /> },
      { name: 'SASS/LESS', icon: <ScrollText className="w-5 h-5 text-pink-400" /> },
      { name: 'Styled Components', icon: <Component className="w-5 h-5 text-pink-300" /> },
      { name: 'CSS-in-JS', icon: <Scissors className="w-5 h-5 text-blue-300" /> },
    ],
  },
  {
    category: 'Backend',
    icon: <Server className="w-6 h-6 text-primary" />,
    technologies: [
      { name: 'Node.js', icon: <ServerIcon className="w-5 h-5 text-green-500" /> },
      { name: 'Express.js', icon: <Router className="w-5 h-5 text-gray-400" /> },
      { name: 'MongoDB', icon: <DatabaseIcon className="w-5 h-5 text-green-600" /> },
      { name: 'Mongoose', icon: <Code2 className="w-5 h-5 text-orange-500" /> },
      { name: 'SSO', icon: <KeyRound className="w-5 h-5 text-purple-500" /> },
      { name: 'RESTful APIs', icon: <Cable className="w-5 h-5 text-blue-400" /> },
      { name: 'Data Validation', icon: <CheckCircle className="w-5 h-5 text-green-400" /> },
      { name: 'Authentication & Security', icon: <Shield className="w-5 h-5 text-yellow-500" /> },
      { name: 'Database Hosting', icon: <Cloud className="w-5 h-5 text-blue-500" /> },
    ],
  },
  {
    category: 'Tools & Others',
    icon: <Terminal className="w-6 h-6 text-primary" />,
    technologies: [
      { name: 'Git & GitHub', icon: <Github className="w-5 h-5 text-gray-300" /> },
      { name: 'Gitlab', icon: <GitBranch className="w-5 h-5 text-orange-400" /> },
      { name: 'Jest & Testing', icon: <Bug className="w-5 h-5 text-red-400" /> },
      { name: 'CI/CD Pipelines', icon: <Workflow className="w-5 h-5 text-green-400" /> },
      { name: 'Agile Methodology', icon: <Users className="w-5 h-5 text-blue-300" /> },
      { name: 'Data Structures & Algorithms', icon: <Brain className="w-5 h-5 text-blue-300" /> },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-primary">//</span> Skills & Expertise
        </h2>
        <div className="h-1 w-24 bg-primary mb-8"></div>
        <p className="text-lg text-muted-foreground max-w-2xl mb-12">
          As a MERN stack developer, I've cultivated a wide range of technical skills. Here's an overview 
          of my expertise in various technologies and tools.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center gap-3 mb-6">
                {skillGroup.icon}
                <h3 className="text-xl font-bold">{skillGroup.category}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skillGroup.technologies.map((tech) => (
                  <div 
                    key={tech.name}
                    className="flex items-center p-3 rounded-md border border-border/50 bg-secondary/50 hover:border-primary transition-colors"
                  >
                    <div className="mr-3">{tech.icon}</div>
                    <span className="font-medium text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
