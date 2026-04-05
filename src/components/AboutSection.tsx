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
                I am a Senior Frontend Developer with 3.8+ years of experience building scalable, high-performance web applications using React.js, Next.js, and TypeScript.
              </p>

              <p>
                Currently working on a large-scale job platform, focusing on improving core user journeys such as login, registration, profile, and job search, while optimizing performance and overall user experience.
              </p>

              <p>
                Strong in frontend architecture, API integration, and performance optimization, with experience in implementing SSO systems (Azure AD, Okta, ForgeRock). Also have hands-on experience with React Native and working knowledge of Node.js, Express, and MongoDB for full-stack development.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Education & Experience</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white flex-shrink-0 flex items-center justify-center">
                    <img
                      src="/htmedia.svg"
                      alt="HT Media Group Logo"
                      width={42}
                      height={42}
                      className="object-contain"
                    />
                  </div>
                  <div className="border-l-2 border-primary pl-4 pb-4 flex-1">
                    <p className="text-primary font-medium">2025 - 2026</p>
                    <h4 className="text-lg font-semibold">Senior Frontend Developer</h4>
                    <p className="text-muted-foreground">HT Media Group, Gurugram</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white flex-shrink-0 flex items-center justify-center">
                    <img
                      src="/inspironlabs.png"
                      alt="Inspironlabs Logo"
                      width={42}
                      height={42}
                      className="object-contain"
                    />
                  </div>
                  <div className="border-l-2 border-primary pl-4 pb-4 flex-1">
                    <p className="text-primary font-medium">2022 - 2025</p>
                    <h4 className="text-lg font-semibold">Software Engineer</h4>
                    <p className="text-muted-foreground">Inspironlabs Software System Private Limited, Bengaluru</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white flex-shrink-0 flex items-center justify-center">
                    <img
                      src="/masai.png"
                      alt="Masai School Logo"
                      width={42}
                      height={42}
                      className="object-contain"
                    />
                  </div>
                  <div className="border-l-2 border-primary pl-4 pb-4 flex-1">
                    <p className="text-primary font-medium">2021 - 2022</p>
                    <h4 className="text-lg font-semibold">Full Stack Web Development</h4>
                    <p className="text-muted-foreground">Masai School, Bengaluru</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white flex-shrink-0 flex items-center justify-center">
                    <img
                      src="/nseit.png"
                      alt="NSEIT Logo"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div className="border-l-2 border-primary pl-4 pb-4 flex-1">
                    <p className="text-primary font-medium">2020 - 2021</p>
                    <h4 className="text-lg font-semibold">Information Technology Supervisor</h4>
                    <p className="text-muted-foreground">NSEIT Limited, Raipur</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white flex-shrink-0 flex items-center justify-center">
                    <img
                      src="/csvtu.png"
                      alt="CSVTU Logo"
                      width={38}
                      height={38}
                      className="object-contain"
                    />
                  </div>
                  <div className="border-l-2 border-primary pl-4 flex-1">
                    <p className="text-primary font-medium">2016 - 2020</p>
                    <h4 className="text-lg font-semibold">B.Tech In Computer Science and Engineering (CSE)</h4>
                    <p className="text-muted-foreground">Chhattisgarh Swami Vivekanand Technical University, Bhilai</p>
                  </div>
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
                  <span className="text-yellow-300">name</span>:{" "}
                  <span className="text-green-300">'Manoj Kumar Nishad'</span>,{"\n"}

                  {"  "}
                  <span className="text-yellow-300">title</span>:{" "}
                  <span className="text-green-300">'Senior Frontend Developer'</span>,{"\n"}

                  {"  "}
                  <span className="text-yellow-300">experience</span>:{" "}
                  <span className="text-green-300">'3.8+ Years'</span>,{"\n"}

                  {"  "}
                  <span className="text-yellow-300">coreSkills</span>: {"["}{"\n"}
                  {"    "}<span className="text-green-300">'React.js'</span>,{"\n"}
                  {"    "}<span className="text-green-300">'Next.js'</span>,{"\n"}
                  {"    "}<span className="text-green-300">'TypeScript'</span>,{"\n"}
                  {"    "}<span className="text-green-300">'React Native'</span>,{"\n"}
                  {"  "}{"]"}, {"\n"}

                  {"  "}
                  <span className="text-yellow-300">specialization</span>: {"["}{"\n"}
                  {"    "}<span className="text-green-300">'Frontend Architecture'</span>,{"\n"}
                  {"    "}<span className="text-green-300">'Performance Optimization'</span>,{"\n"}
                  {"    "}<span className="text-green-300">'SSO (Azure AD, Okta, ForgeRock)'</span>,{"\n"}
                  {"    "}<span className="text-green-300">'API Integration'</span>,{"\n"}
                  {"  "}{"]"}, {"\n"}

                  {"  "}
                  <span className="text-yellow-300">backend</span>: {"["}{"\n"}
                  {"    "}<span className="text-green-300">'Node.js'</span>,{"\n"}
                  {"    "}<span className="text-green-300">'Express.js'</span>,{"\n"}
                  {"    "}<span className="text-green-300">'MongoDB'</span>,{"\n"}
                  {"  "}{"]"}, {"\n"}

                  {"  "}
                  <span className="text-yellow-300">focus</span>:{" "}
                  <span className="text-green-300 break-words">'Scalable UI, Performance,<br/> User Experience'</span>,{"\n"}
                  {"  "}
                  <span className="text-yellow-300">contact</span>:{" "}
                  <span className="text-green-300">'amnishad0512@gmail.com'</span>{"\n"}

                  <span className="text-blue-400">{"}"}</span>;
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
