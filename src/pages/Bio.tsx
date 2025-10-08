import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Heart, Coffee, Music, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

const Bio = () => {
  const personalInfo = {
    name: "John Doe",
    title: "Full Stack Developer & Tech Enthusiast",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    website: "www.johndoe.com",
    github: "github.com/johndoe",
    linkedin: "linkedin.com/in/johndoe"
  };

  const interests = [
    { icon: Coffee, label: "Coffee Brewing", description: "Passionate about specialty coffee and latte art" },
    { icon: Music, label: "Music Production", description: "Creating electronic music in my spare time" },
    { icon: Camera, label: "Photography", description: "Landscape and street photography enthusiast" },
    { icon: Heart, label: "Open Source", description: "Contributing to open-source projects" }
  ];

  const languages = [
    { name: "English", proficiency: "Native" },
    { name: "Spanish", proficiency: "Fluent" },
    { name: "French", proficiency: "Intermediate" },
    { name: "Japanese", proficiency: "Basic" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="animate-fade-in">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Bio-Data
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Personal information, interests, and more about me
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Personal Information Card */}
            <Card className="shadow-card hover:shadow-hover transition-all duration-300 animate-slide-up">
              <CardHeader>
                <CardTitle className="text-3xl">Personal Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center pb-6 border-b">
                    <h2 className="text-3xl font-bold mb-2">{personalInfo.name}</h2>
                    <p className="text-xl text-muted-foreground">{personalInfo.title}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">{personalInfo.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-medium">{personalInfo.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium">{personalInfo.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <Globe className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Website</p>
                        <p className="font-medium">{personalInfo.website}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center gap-4 pt-4">
                    <Button variant="outline" className="gap-2">
                      <Github className="h-4 w-4" />
                      GitHub
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About Me Section */}
            <Card className="shadow-card hover:shadow-hover transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="text-2xl">About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a passionate full-stack developer with over 6 years of experience in creating 
                    innovative web applications. My journey in technology started with a curiosity about 
                    how websites work, and it has evolved into a career dedicated to building exceptional 
                    digital experiences.
                  </p>
                  <p>
                    I believe in writing clean, maintainable code and staying up-to-date with the latest 
                    technologies. When I'm not coding, you can find me exploring new coffee shops, 
                    producing music, or capturing moments through my camera lens.
                  </p>
                  <p>
                    I'm always excited to collaborate on interesting projects and contribute to the 
                    tech community through open-source contributions and mentoring.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Interests & Hobbies */}
            <Card className="shadow-card hover:shadow-hover transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="text-2xl">Interests & Hobbies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {interests.map((interest, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <interest.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{interest.label}</h3>
                        <p className="text-sm text-muted-foreground">{interest.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="shadow-card hover:shadow-hover transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="text-2xl">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {languages.map((lang, index) => (
                    <div 
                      key={index}
                      className="text-center p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <p className="font-semibold mb-1">{lang.name}</p>
                      <p className="text-sm text-muted-foreground">{lang.proficiency}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Personal Philosophy */}
            <Card className="shadow-card hover:shadow-hover transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle className="text-2xl">Personal Philosophy</CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="border-l-4 border-accent pl-4 italic text-lg text-muted-foreground">
                  "Code is like humor. When you have to explain it, it's bad." - Cory House
                </blockquote>
                <p className="mt-4 text-muted-foreground">
                  I believe in continuous learning, collaboration, and building technology that makes 
                  a positive impact on people's lives. Every line of code is an opportunity to create 
                  something meaningful.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Bio;
