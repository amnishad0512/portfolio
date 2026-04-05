import React from 'react';
// Tech skills with icons
const skills = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'React.js', icon: '/react.png' },
      { name: 'Next.js', icon: '/next.png' },
      { name: 'TypeScript', icon: '/ts.png' },
      { name: 'JavaScript (ES6+)', icon: '/js.png' },
      { name: 'React Native', icon: '/react.png' },
      { name: 'SPA Architecture', icon: '/spa.png' },
      { name: 'Component-Based Architecture', icon: '/cba.jpg' },
      { name: 'Redux Toolkit', icon: '/redux.png' },
      { name: 'React Query', icon: '/react-query.webp' },
      { name: 'Zustand', icon: '/zustand.svg' },
      { name: 'Tailwind CSS', icon: '/tailwind.png' },
      { name: 'Material UI', icon: '/mui.png' },
      { name: 'Styled Components', icon: '/styled.png' },
      { name: 'SASS', icon: '/sass.png' },
      { name: 'React Hook Form', icon: '/react-hook-form.png' },
      { name: 'Formik', icon: '/formik.webp' },
      { name: 'Zod', icon: '/zod.png' },
      { name: 'Yup', icon: '/yup.jpg' },
      { name: 'NextAuth.js', icon: '/next-auth.jpg' },
      { name: 'Chart.js', icon: '/chart.svg' },
      { name: 'Performance Optimization', icon: '/performance.png' }
    ]
  },

  {
    category: 'Backend & Authentication',
    technologies: [
      { name: 'Node.js', icon: '/node.png' },
      { name: 'Express.js', icon: '/express.png' },
      { name: 'MongoDB', icon: '/mongo.png' },
      { name: 'Mongoose', icon: '/mongoose.png' },
      { name: 'REST APIs', icon: '/rest.webp' },
      { name: 'JWT', icon: '/jwt.webp' },
      { name: 'Bcrypt', icon: '/bcrypt.webp' },
      { name: 'Puppeteer', icon: '/puppeteer.png' },
      { name: 'Resend', icon: '/resend.jpg' },
      { name: 'OAuth2', icon: '/oauth.png' },
      { name: 'OpenID Connect', icon: '/openid.png' },
      { name: 'SSO', icon: '/sso.png' },
      { name: 'RBAC', icon: '/rbac.png' },
      { name: 'Authentication & Security', icon: '/authentication.avif' },
      { name: 'Cloudinary', icon: '/cloudnary.svg' },
      { name: 'Azure', icon: '/azure.png' },
      { name: 'Okta', icon: '/okta.png' },
      { name: 'ForgeRock', icon: '/forge-rock.png' },
    ]
  },

  {
    category: 'Tools & Practices',
    technologies: [
      { name: 'Git', icon: '/git.png' },
      { name: 'GitHub', icon: '/github.png' },
      { name: 'GitLab', icon: '/gitlab.png' },
      { name: 'Bitbucket', icon: '/bit-bucket.png' },
      { name: 'CI/CD Pipelines', icon: '/cicd.png' },
      { name: 'Agile Methodology', icon: '/agile.png' },
      { name: 'Jest', icon: '/jest.png' },
      { name: 'Design Patterns', icon: '/design-pattern.png' },
      { name: 'Chrome DevTools', icon: '/chrome-devtools.svg' },
      { name: 'Lighthouse', icon: '/lighthouse.svg' },
      { name: 'ESLint', icon: '/eslint.png' },
      { name: 'Husky', icon: '/husky.png' },
      { name: 'NPM', icon: '/npm.png' },
      { name: 'Yarn', icon: '/yarn.png' },
      { name: 'Axios', icon: '/axios.png' },
      { name: 'Fetch', icon: '/fetch.jpg' },
      { name: 'Babel', icon: '/babel.png' },
      { name: 'Webpack', icon: '/webpack.png' },
    ]
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
                <h3 className="text-xl font-bold">{skillGroup.category}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skillGroup.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex gap-5 items-center p-3 rounded-md border border-border/50 bg-secondary/50 hover:border-primary transition-colors"
                  >
                    <img
                      src={tech.icon}
                      alt="CSVTU Logo"
                      width={38}
                      height={38}
                      className="object-contain"
                    />
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
