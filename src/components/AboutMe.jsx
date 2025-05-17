import { Briefcase, Code, User } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center mt-6">
          About <span className="text-primary">Me</span>
        </h2>
        <h3 className="text-2xl flex font-semibold items-center justify-center mb-12">
          Passionate Web Developer & Problem Solver
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground">
              I'm Susavan Mondal, a Computer Science student at Budge Budge Institute Of Technology, Kolkata. I specialize in full-stack development and enjoy building scalable, efficient, and intuitive web applications.
            </p>

            <p className="text-muted-foreground">
              I've developed projects like <strong>Skill Matrix Management</strong> and <strong>Library Management System</strong> using technologies such as .NET, React, PostgreSQL, and ABP.IO. I'm also skilled in Django, JavaScript, and REST APIs.
            </p>

            <p className="text-muted-foreground">
              I'm a consistent learner, having solved 700+ problems on GeeksforGeeks, completed the Google Cloud Facilitator Program, and achieved a CodeChef rating of 1522. Outside tech, I love playing football and guitar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="https://www.linkedin.com/in/susavan-mondal-0a2aa6244/"
                className="cosmic-button border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get In Touch
              </a>

              <a
                href="SUSAVAN MONDAL(FINAL).pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building modern full-stack applications using .NET, React, PostgreSQL and more.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Team Collaboration</h4>
                  <p className="text-muted-foreground">
                    Experienced working in team environments, using Git, GitHub, and Agile practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Experience</h4>
                  <p className="text-muted-foreground">
                    Completed projects using industry-level tools and frameworks including ABP.IO, PostgreSQL, and React Toolkit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
