import { NavLink } from "react-router-dom";
import { Home, FileText, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Portfolio
          </NavLink>
          
          <div className="flex items-center gap-2">
            <NavLink to="/">
              {({ isActive }) => (
                <Button 
                  variant={isActive ? "default" : "ghost"} 
                  size="sm"
                  className="gap-2"
                >
                  <Home className="h-4 w-4" />
                  <span className="hidden sm:inline">Home</span>
                </Button>
              )}
            </NavLink>
            
            <NavLink to="/resume">
              {({ isActive }) => (
                <Button 
                  variant={isActive ? "default" : "ghost"} 
                  size="sm"
                  className="gap-2"
                >
                  <FileText className="h-4 w-4" />
                  <span className="hidden sm:inline">Resume</span>
                </Button>
              )}
            </NavLink>
            
            <NavLink to="/bio">
              {({ isActive }) => (
                <Button 
                  variant={isActive ? "default" : "ghost"} 
                  size="sm"
                  className="gap-2"
                >
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Bio</span>
                </Button>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
