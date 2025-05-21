import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const AboutSection = () => {
  const isMobile = useIsMobile();

  return (
    <section id="about" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-2">
              <span className="text-primary">//</span> About Me
            </h2>
            <div className="h-1 w-24 bg-primary mb-8"></div>
            
            <div className="space-y-4 text-lg">
              <p>
                Hello! I'm a passionate MERN Stack developer with a love for creating 
                elegant, efficient, and user-friendly web applications.
              </p>
              <p>
                With {!isMobile && <span className="code-text">3+ years</span>} 
                {isMobile && "3+ years"} of experience in full-stack development, 
                I specialize in building modern web applications using MongoDB, Express, 
                React, and Node.js.
              </p>
              <p>
                My journey in programming started when I built my first website during college, 
                and since then, I've been constantly learning and improving my skills in web development.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or enjoying outdoor activities.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Education & Experience</h3>
              <ul className="space-y-4">
                <li className="border-l-2 border-primary pl-4 pb-4">
                  <p className="text-primary font-medium">2022 - Present</p>
                  <h4 className="text-lg font-semibold">Software Engineer</h4>
                  <p className="text-muted-foreground">Inspironlabs Software System Private Limited, Bengaluru</p>
                </li>
                <li className="border-l-2 border-primary pl-4 pb-4">
                  <p className="text-primary font-medium">2021 - 2022</p>
                  <h4 className="text-lg font-semibold">Full Stack Web Development</h4>
                  <p className="text-muted-foreground">Masai School, Bengaluru</p>
                </li>
                <li className="border-l-2 border-primary pl-4 pb-4">
                  <p className="text-primary font-medium">2020 - 2021</p>
                  <h4 className="text-lg font-semibold">Information Technology Supervisor</h4>
                  <p className="text-muted-foreground">NSEIT Limited, Raipur</p>
                </li>
                <li className="border-l-2 border-primary pl-4">
                  <p className="text-primary font-medium">2016 - 2020</p>
                  <h4 className="text-lg font-semibold">B.Tech Computer Science and Engineering (CSE)</h4>
                  <p className="text-muted-foreground">Chhattisgarh Swami Vivekanand Technical University, Bhilai</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="bg-code rounded-lg p-6 h-full">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-orange-400 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
                <span className="text-muted-foreground text-sm">about.js</span>
              </div>
              
              <pre className="font-mono text-sm">
                <code>
                  <span className="text-blue-400">const</span>{" "}
                  <span className="text-green-400">developer</span>{" "}
                  <span className="text-blue-400">=</span>{" "}
                  <span className="text-blue-400">{"{"}</span>{"\n"}
                  {"  "}
                  <span className="text-yellow-300">name</span>
                  <span className="text-blue-400">:</span>{" "}
                  <span className="text-green-300">'Manoj Nishad'</span>,{"\n"}
                  {"  "}
                  <span className="text-yellow-300">title</span>
                  <span className="text-blue-400">:</span>{" "}
                  <span className="text-green-300">'MERN Stack Developer'</span>,{"\n"}
                  {"  "}
                  <span className="text-yellow-300">skills</span>
                  <span className="text-blue-400">:</span>{" "}
                  <span className="text-blue-400">{"["}</span>{"\n"}
                  {"    "}
                  <span className="text-green-300">'HTML5'</span>,{"\n"}
                  {"    "}
                  <span className="text-green-300">'CSS3'</span>,{"\n"}
                  {"    "}
                  <span className="text-green-300">'Sass'</span>,{"\n"}
                  {"    "}
                  <span className="text-green-300">'Tailwind CSS'</span>,{"\n"}
                  {"    "}
                  <span className="text-green-300">'Material UI'</span>,{"\n"}
                  {"    "}
                  <span className="text-green-300">'Ant Design'</span>,{"\n"}
                  {"    "}
                  <span className="text-green-300">'Bootstrap'</span>,{"\n"}
                  {"    "}
                  <span className="text-green-300">'JavaScript (ES6+)'</span>,{"\n"}
                  {"    "}
                  <span className="text-green-300">'TypeScript'</span>,{"\n"}
                  {"    "}
                  <span className="text-green-300">'React.js'</span>,{"\n"}
                  {"    "}
                  <span className="text-green-300">'Next.js'</span>,{"\n"}
                  {"    "}
                  <span className="text-green-300">'Redux Toolkit'</span>,{"\n"}
                  {"    "}
                  <span className="text-green-300">'Styled Components'</span>,{"\n"}
                  {"    "}
                  <span className="text-green-300">'Node.js'</span>,{"\n"}
                  {"    "}
                  <span className="text-green-300">'Express.js'</span>,{"\n"}
                  {"    "}
                  <span className="text-green-300">'MongoDB'</span>,{"\n"}
                  {"    "}
                  <span className="text-green-300">'RESTful APIs'</span>,{"\n"}
                  {"    "}
                  <span className="text-green-300">'Git'</span>{"\n"}
                  {"    "}
                  <span className="text-green-300">'Jest'</span>{"\n"}
                  {"    "}
                  <span className="text-green-300">'Data Structures'</span>{"\n"}
                  {"    "}
                  <span className="text-green-300">'Algorithms'</span>{"\n"}
                  {"  "}
                  <span className="text-blue-400">{"]"}</span>,{"\n"}
                  {"  "}
                  <span className="text-yellow-300">interests</span>
                  <span className="text-blue-400">:</span>{" "}
                  <span className="text-blue-400">{"["}</span>{"\n"}
                  {"    "}
                  <span className="text-green-300">'Building Interactive UI'</span>,{"\n"}
                  {"    "}
                  <span className="text-green-300">'Open Source Contribution'</span>,{"\n"}
                  {"    "}
                  <span className="text-green-300">'Design to Code'</span>,{"\n"}
                  {"    "}
                  <span className="text-green-300">'UI/UX Trends'</span>,{"\n"}
                  {"  "}
                  <span className="text-blue-400">{"]"}</span>,{"\n"}
                  {"  "}
                  <span className="text-yellow-300">contact</span>
                  <span className="text-blue-400">:</span>{" "}
                  <span className="text-green-300">'amnishad0512@gmail.com'</span>{"\n"}
                  <span className="text-blue-400">{"}"}</span>;{"\n\n"}
                  <span className="text-blue-400">export default</span>{" "}
                  <span className="text-green-400">developer</span>;
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
