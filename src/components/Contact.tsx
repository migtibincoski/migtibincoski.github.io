import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Vamos <span className="bg-gradient-primary bg-clip-text text-transparent">Conectar</span>
        </h2>
        
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Estou sempre aberto a novos projetos, colaborações e oportunidades
        </p>

        <Card className="p-8 md:p-12 bg-card/50 border-border backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Criciúma, SC - Brasil</span>
                </div>
                
                <a 
                  href="mailto:contato@migtibincoski.is-a.dev"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <span>contato@migtibincoski.is-a.dev</span>
                </a>
              </div>

              <div className="space-y-3">
                <Button 
                  className="w-full justify-start bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  asChild
                >
                  <a href="mailto:contato@migtibincoski.is-a.dev">
                    <Mail className="mr-2 h-5 w-5" />
                    Enviar Email
                  </a>
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full justify-start border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/migtibincoski" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <a href="https://github.com/migtibincoski" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                {/* <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-primary opacity-20 blur-3xl" /> */}
                <p className="text-lg text-foreground/90 leading-relaxed">
                  <strong className="text-primary">Construir pontes</strong> entre ideias e realidade, 
                  código e criatividade, é o que me move.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Miguel Tibincoski. Desenvolvedor Full-Stack.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
