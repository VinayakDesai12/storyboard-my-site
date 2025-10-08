import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award, Code } from "lucide-react";

const Resume = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description: "Leading development of scalable web applications using React and Node.js. Mentoring junior developers and implementing best practices.",
      achievements: [
        "Improved application performance by 40%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipelines"
      ]
    },
    {
      title: "Software Developer",
      company: "Digital Solutions Ltd.",
      period: "2019 - 2021",
      description: "Developed and maintained multiple client-facing web applications with focus on user experience and performance.",
      achievements: [
        "Built 10+ production websites",
        "Reduced load times by 50%",
        "Introduced automated testing"
      ]
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2017 - 2019",
      description: "Contributed to full-stack development projects and learned modern web development practices.",
      achievements: [
        "Completed 50+ feature implementations",
        "Participated in agile development",
        "Collaborated with cross-functional teams"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "University of Technology",
      period: "2015 - 2017",
      description: "Specialized in Software Engineering and Web Technologies"
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "College of Engineering",
      period: "2012 - 2015",
      description: "Graduated with First Class Honors"
    }
  ];

  const skills = {
    "Frontend": ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"],
    "Backend": ["Node.js", "Python", "Express", "PostgreSQL", "MongoDB"],
    "Tools": ["Git", "Docker", "AWS", "Jenkins", "Figma"],
    "Soft Skills": ["Leadership", "Communication", "Problem Solving", "Team Management"]
  };

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "Certified Scrum Master (CSM)",
    "MongoDB Certified Developer"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="animate-fade-in">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Resume
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive overview of my professional experience, education, and skills
            </p>
          </div>

          {/* Experience Section */}
          <section className="mb-16 animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Work Experience</h2>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div>
                        <CardTitle className="text-2xl">{exp.title}</CardTitle>
                        <CardDescription className="text-lg mt-1">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="text-sm">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-16 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-accent/10 rounded-lg">
                <GraduationCap className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div>
                        <CardTitle className="text-2xl">{edu.degree}</CardTitle>
                        <CardDescription className="text-lg mt-1">
                          {edu.institution}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="text-sm">
                        {edu.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Code className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-3xl font-bold">Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, skillList], index) => (
                <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
                  <CardHeader>
                    <CardTitle>{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, i) => (
                        <Badge key={i} variant="outline" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Certifications</h2>
            </div>
            <Card className="shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="pt-6">
                <ul className="grid md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Resume;
