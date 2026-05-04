import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <img 
            src={profileImage} 
            alt="Miguel Tibincoski" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-primary/20 shadow-glow"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
          Miguel Tibincoski
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-4 font-light animate-fade-in delay-200">
          Desenvolvedor Full-Stack
        </p>
        
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in delay-300">
          Unindo arte, engenharia e propósito para criar experiências digitais significativas.
          Do backend à interface, com código limpo e design inteligente.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in delay-500">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            onClick={() => scrollToSection("projetos")}
          >
            Ver Projetos <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            onClick={() => scrollToSection("contato")}
          >
            Entrar em Contato
          </Button>
        </div>

        <div className="flex gap-6 justify-center animate-fade-in delay-700">
          <a 
            href="https://github.com/migtibincoski" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/migtibincoski" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="mailto:tibincoskimiguel@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
