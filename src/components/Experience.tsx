import { Card } from "@/components/ui/card";
import { Briefcase, Shield, Code2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Desenvolvedor Full-Stack",
      company: "Freelancer & Projetos Próprios",
      location: "Remoto",
      period: "Em constante evolução",
      icon: Code2,
      description:
        "Desenvolvimento de aplicações web completas com foco em criar produtos digitais que resolvem problemas reais. Experiência com todo o ciclo de desenvolvimento, desde a concepção até o deploy.",
      highlights: [
        "Background em música, composição e design gráfico",
        "Foco em Clean Code e arquitetura escalável",
        "Experiência com integração de sistemas e APIs",
      ],
      current: false,
    },
    {
      title: "Auxiliar de Produção Audiovisual",
      company: "Estudio741",
      location: "Criciúma/SC",
      period: "2025 ~ 2026",
      icon: Briefcase,
      description:
        "Unindo vivência técnica à sensibilidade artística, trabalho na produção audiovisual aprendendo a transformar ideias em experiências visuais e digitais com propósito. Esta experiência fortalece minha capacidade de pensar de forma multidisciplinar e criar soluções que comunicam visualmente.",
      current: false,
      highlights: [],
    },

    {
      title: "Estagiário - Secretário",
      company: "Delegacia de Polícia Civil",
      location: "Içara/SC",
      period: "2025",
      icon: Shield,
      description:
        "Atuei como secretário utilizando programação para automatizar serviços operacionais cansativos, incluindo sistemas de agendamento de horários e comunicação interna entre equipes. Essa experiência demonstrou meu interesse em usar tecnologia para otimizar processos e melhorar a eficiência organizacional.",
      current: false,
      highlights: [],
    },
  ];

  return (
    <section id="experiencia" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Experiência &{" "}
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            Trajetória
          </span>
        </h2>

        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          Jornada que une tecnologia, criatividade e inovação
        </p>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:gap-8`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-8 md:left-1/2 w-4 h-4 -ml-[7px] rounded-full ${
                    exp.current
                      ? "bg-primary shadow-glow animate-pulse"
                      : "bg-secondary"
                  } border-4 border-background z-10`}
                />

                {/* Content card */}
                <Card
                  className={`w-full md:w-[calc(50%-2rem)] ml-16 md:ml-0 p-6 bg-card border-border hover:shadow-card transition-all duration-300 ${
                    exp.current ? "border-primary/50" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg ${
                        exp.current ? "bg-primary/10" : "bg-secondary/10"
                      }`}
                    >
                      <exp.icon
                        className={`h-6 w-6 ${
                          exp.current ? "text-primary" : "text-secondary"
                        }`}
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <p
                        className={`font-medium mb-1 ${
                          exp.current ? "text-primary" : "text-secondary"
                        }`}
                      >
                        {exp.company} • {exp.location}
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        {exp.period}
                      </p>

                      <p className="text-foreground/90 leading-relaxed">
                        {exp.description}
                      </p>

                      {exp.highlights && (
                        <div className="mt-4 space-y-2">
                          {exp.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full" />
                              <span className="text-sm text-foreground/80">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
