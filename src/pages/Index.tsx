import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Briefcase, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display bg-gradient-hero bg-clip-text text-transparent">
              Hello, I'm Vinayak Mallesh Desai
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up">
              Full Stack Developer | Tech Enthusiast | Problem Solver
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Crafting elegant solutions to complex problems. Passionate about building 
              scalable web applications and contributing to open-source projects.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link to="/resume">
                <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 hover-scale">
                  View Resume
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/bio">
                <Button size="lg" variant="outline" className="gap-2 hover-scale">
                  Learn More About Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview Cards */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-card hover-lift animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="pt-6">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Technical Skills</h3>
                <p className="text-muted-foreground mb-4">
                  Proficient in React, TypeScript, Node.js, and modern web technologies. 
                  Always learning and adapting to new tools.
                </p>
                <Link to="/resume#skills">
                  <Button variant="link" className="p-0 h-auto text-accent link-underline">
                    View All Skills →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-card hover-lift animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-6">
                <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4">
                  <Briefcase className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Experience</h3>
                <p className="text-muted-foreground mb-4">
                  6+ years of professional experience building scalable applications 
                  and leading development teams.
                </p>
                <Link to="/resume">
                  <Button variant="link" className="p-0 h-auto text-accent link-underline">
                    View Work History →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-card hover-lift animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <CardContent className="pt-6">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Education</h3>
                <p className="text-muted-foreground mb-4">
                  Master's in Computer Science with a focus on Software Engineering 
                  and Web Technologies.
                </p>
                <Link to="/resume#education">
                  <Button variant="link" className="p-0 h-auto text-accent link-underline">
                    View Education →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="max-w-4xl mx-auto bg-gradient-hero text-primary-foreground shadow-hover animate-slide-up animate-glow">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
                Let's Work Together
              </h2>
              <p className="text-lg mb-8 opacity-90">
                I'm always interested in hearing about new projects and opportunities.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary" className="gap-2 hover-scale">
                  Get In Touch
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link to="/bio">
                  <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 hover-scale">
                    View Full Bio
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 Vinayak Desai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
