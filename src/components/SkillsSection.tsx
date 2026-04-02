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
  Send, // Postman
  CloudCog, // AWS
  Radio, // Socket.IO
  Wrench, // DevTools
  Terminal as TerminalIcon, // Command Line
  Webhook, // API Testing
  Gauge, // Performance Testing
  Boxes, // NPM
  Repeat, // Axios
  Fingerprint, // JWT
  Rocket, // Deployment
  RefreshCcw, // React Query
  Lock, // NextAuth
  Database as ZustandIcon, // Zustand
  FormInput, // React Hook Form
  FileCheck, // Formik
  CheckSquare, // Zod
  Check, // Yup
  Key, // PassportJS
  FileWarning, // Express Validator
  Cloud as CloudinaryIcon, // Cloudinary
  Key as JWTIcon, // JWT
  Lock as BcryptIcon, // Bcrypt
  KeyRound as OAuth2Icon, // OAuth2
  ShieldCheck, // RBAC
  Lightbulb, // Lighthouse
  Code as PatternIcon, // Design Pattern
  FileCode, // ESLint
  GitCommit, // Husky
  Timer, // Rate Limiting

} from 'lucide-react';

// Tech skills with icons
const skills = [
  {
    category: 'Frontend',
    icon: <Layers className="w-6 h-6 text-primary" />,
    technologies: [
      { name: 'React.js', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="w-5 h-5" /> },
      { name: 'JavaScript (ES6+)', icon: 
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-5 h-5" />
       },
      { name: 'TypeScript', icon: 
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
       },
      { name: 'HTML5', icon: 
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
       },
       { name: 'CSS3', icon: 
        
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
          
       },
      { name: 'Redux', icon: 
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
      },
      { name: 'Redux Toolkit', icon: 
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
       },
      { name: 'Next.js', icon: 
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
       },
      { name: 'React Native', icon: <img src="/react-native.svg" alt="React Native" className="w-5 text-green-500" /> },
      { name: 'Tailwind CSS', icon: 
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
       },
      { name: 'Material UI', icon: 
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" />
       },
      { name: 'SASS', icon: 
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
       },
       { name: 'Less', icon: 
        
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/less/less-plain-wordmark.svg" />
          
       },
      { name: 'Styled Components', icon: 
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/styledcomponents/styledcomponents-original.svg" />
       },
       {
        name: "jQuery", icon: 
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" />
       },
      { name: 'React Query', icon: <RefreshCcw className="w-5 h-5 text-red-400" /> },
      { name: 'NextAuth.js', icon: <Lock className="w-5 h-5 text-green-500" /> },
      { name: 'Zustand', icon: 
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg" />
      },
      { name: 'React Hook Form', icon: <FormInput className="w-5 h-5 text-pink-500" /> },
      { name: 'Formik', icon: <FileCheck className="w-5 h-5 text-blue-400" /> },
      { name: 'Zod', icon: <CheckSquare className="w-5 h-5 text-blue-600" /> },
      { name: 'Yup', icon: <Check className="w-5 h-5 text-green-400" /> },
      {
        name:"Android Studio", icon:
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" />
      
      },
      {
        name:"Ant Design", icon:
       
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-original.svg" />
      
      },
      {
        name:"Bootstrap",icon:
       
        
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
          
          

      },{
        name:"Chart.js",icon:
       
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chartjs/chartjs-original.svg" />
          

      }
    ],
  },
  {
    category: 'Backend',
    icon: <Server className="w-6 h-6 text-primary" />,
    technologies: [
      { name: 'Node.js', icon: 
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
       },
      { name: 'Express.js', icon: 
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
       },
      { name: 'MongoDB', icon: 
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
       },
      { name: 'Mongoose', icon: 
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg" />
      },
      { name: 'SSO', icon: <KeyRound className="w-5 h-5 text-purple-500" /> },
      { name: 'RESTful APIs', icon: <Cable className="w-5 h-5 text-blue-400" /> },
      { name: 'Data Validation', icon: <CheckCircle className="w-5 h-5 text-green-400" /> },
      { name: 'Authentication & Security', icon: <Shield className="w-5 h-5 text-yellow-500" /> },
      { name: 'Database Hosting', icon: <Cloud className="w-5 h-5 text-blue-500" /> },
      { name: 'Postman', icon: <Send className="w-5 h-5 text-orange-500" /> },
      { name: 'AWS', icon: <CloudCog className="w-5 h-5 text-yellow-500" /> },
      { name: 'Socket.IO', icon: <Radio className="w-5 h-5 text-gray-400" /> },
      { name: 'Passport.js', icon: <Key className="w-5 h-5 text-green-600" /> },
      { name: 'Express Validator', icon: <FileWarning className="w-5 h-5 text-red-500" /> },
      { name: 'Cloudinary', icon: <CloudinaryIcon className="w-5 h-5 text-blue-400" /> },
      { name: 'JWT', icon: <JWTIcon className="w-5 h-5 text-purple-500" /> },
      { name: 'Bcrypt', icon: <BcryptIcon className="w-5 h-5 text-red-400" /> },
      { name: 'OAuth2', icon: <OAuth2Icon className="w-5 h-5 text-green-500" /> },
      { name: 'RBAC', icon: <ShieldCheck className="w-5 h-5 text-yellow-600" /> },
    ],
  },
  {
    category: 'Tools & Others',
    icon: <Terminal className="w-6 h-6 text-primary" />,
    technologies: [
      { name: 'Git & GitHub', icon: 
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
       },
      { name: 'Gitlab', icon: 
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" />
       },
      { name: 'Jest & Testing', icon: 
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" />
      },
      { name: 'CI/CD Pipelines', icon: <Workflow className="w-5 h-5 text-green-400" /> },
      { name: 'Agile Methodology', icon: <Users className="w-5 h-5 text-blue-300" /> },
      { name: 'Data Structures & Algorithms', icon: <Brain className="w-5 h-5 text-blue-300" /> },
      { name: 'Chrome DevTools', icon: <Wrench className="w-5 h-5 text-blue-400" /> },
      { name: 'NPM/Yarn', icon: <Boxes className="w-5 h-5 text-red-500" /> },
      { name: 'Axios/Fetch', icon: 
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg" />
       },
       {
        name: "Azure",icon:
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" />
    
       },
       {
name: "Babel",icon:
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg" />

       },
       {
        name:"Bash",icon:
       
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" />
          

       },
       {
name:"Bitbucket",icon:
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg" />

       },
      { name: 'JWT/Auth', icon: <Fingerprint className="w-5 h-5 text-blue-500" /> },
      { name: 'Deployment Tools', icon: <Rocket className="w-5 h-5 text-green-500" /> },
      { name: 'Lighthouse', icon: <Lightbulb className="w-5 h-5 text-yellow-400" /> },
      { name: 'Design Patterns', icon: <PatternIcon className="w-5 h-5 text-blue-500" /> },
      { name: 'ESLint', icon: 
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg" />
       },
      { name: 'Husky', icon: <GitCommit className="w-5 h-5 text-gray-400" /> },
      { name: 'Rate Limiting', icon: <Timer className="w-5 h-5 text-red-400" /> },
      { name: "AWS", icon:
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
      },{
        name:"JIRA",icon:
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" />
      
      },{
        name:"Json",
        icon:
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" />
      
      }
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
          Frontend-focused engineer with strong expertise in building scalable, high-performance UI and hands-on experience across APIs, authentication systems, and full-stack collaboration.
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
