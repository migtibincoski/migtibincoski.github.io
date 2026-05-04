import { Card } from "@/components/ui/card";
import { Code2, Palette, Lightbulb, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Engenharia & Arte",
      description: "Transformo linhas de código em experiências visuais com propósito"
    },
    {
      icon: Palette,
      title: "Design Inteligente",
      description: "Background em música e design gráfico para soluções originais"
    },
    {
      icon: Lightbulb,
      title: "Visão Inovadora",
      description: "Foco em criar produtos que resolvem problemas reais"
    },
    {
      icon: Users,
      title: "Liderança Natural",
      description: "Inspiro equipes a alcançar resultados com criatividade"
    }
  ];

  return (
    <section id="sobre" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Sobre <span className="bg-gradient-primary bg-clip-text text-transparent">Mim</span>
        </h2>
        
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          Desenvolvedor full-stack com mente criativa e visão voltada para o futuro
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {highlights.map((item, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:shadow-card hover:border-primary/50 transition-all duration-300"
            >
              <item.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-card/50 border-border backdrop-blur-sm">
          <p className="text-lg leading-relaxed text-foreground/90 mb-4">
            Atualmente trabalho no <strong className="text-primary">Estudio741</strong> em Criciúma/SC como auxiliar de produção audiovisual, 
            unindo vivência técnica à sensibilidade artística. Desenvolvo aplicações completas com foco em <strong className="text-primary">performance, 
            usabilidade e design inteligente</strong>.
          </p>
          
          <p className="text-lg leading-relaxed text-foreground/90 mb-4">
            Domino tecnologias como <strong className="text-secondary">ReactJS, Node.js, Express, PHP, MySQL</strong>, além de experiência 
            com APIs REST, PWA e boas práticas de Clean Code. Busco sempre o equilíbrio entre estética e engenharia.
          </p>

          <p className="text-lg leading-relaxed text-foreground/90">
            <strong className="text-accent">Acredito que cada linha de código carrega uma intenção</strong>, e que o verdadeiro valor da 
            tecnologia está em tornar o complexo simples. Vejo o desenvolvimento como uma forma de arte lógica: uma ponte entre 
            criatividade e estrutura, entre emoção e razão.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
