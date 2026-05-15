import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects: Array<{
    title: string;
    description: string;
    tech?: string[];
    highlight?: boolean;
    link?: string;
    github?: string;
  }> = [
    {
      title: "Schoolish",
      description:
        "SaaS escolar moderno voltado para otimizar gestão de turmas. Em processo de idealização.",
      tech: ["React", "Node.js", "MySQL", "API REST"],
      highlight: true,
    },
    {
      title: "WhatsApp Business API - Maria Farinha Pizzaria Artesanal",
      description:
        "Integração personalizada da API do WhatsApp Business para a Maria Farinha Pizzaria Artesanal, permitindo comunicação eficiente e automatizada com os clientes, melhorando o atendimento e impulsionando as vendas.",
      tech: [
        "React",
        "Node.js",
        "TypeScript",
        "API REST",
        "WhatsApp Business API",
        "Webhooks",
        "YCloud",
      ],
    },
    {
      title: "Linktree - Thais Abrantes",
      description:
        "Linktree personalizado para Thais Abrantes, apresentando seus projetos, redes sociais e portfólio de forma elegante e funcional, facilitando o acesso a todas as suas plataformas em um único lugar.",
      tech: ["React", "TailwindCSS"],
      link: "https://bio.thaisabrantes.com.br/",
      github:
        "https://github.com/Miguel-Tibincoski-Public-Websites/thais-abrantes-linktree",
    },
    {
      title: "VouMorar",
      description:
        "SaaS imobiliário moderno voltado para otimizar gestão de imóveis, locações e anúncios. Proposta escalável que une tecnologia web e experiência do usuário de forma harmônica.",
      tech: ["React", "Node.js", "TailwindCSS"],
    },
  ];

  return (
    <section id="projetos" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Projetos em{" "}
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            Destaque
          </span>
        </h2>

        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          Soluções completas que refletem inovação, segurança e performance
        </p>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`p-8 bg-card border-border hover:shadow-card transition-all duration-300 ${
                project.highlight ? "border-primary/50 shadow-glow" : ""
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1 flex flex-col gap-3">
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    {project.title}
                    {project.highlight && (
                      <span className="text-xs px-3 py-1 bg-gradient-primary rounded-full text-primary-foreground">
                        Em Desenvolvimento
                      </span>
                    )}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {project.tech && project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-muted text-foreground rounded-md text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {("link" in project || "github" in project) && (
                    <div className="flex gap-3">
                      {project.link && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary"
                          asChild
                        >
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Ver Projeto
                          </a>
                        </Button>
                      )}
                      {project.github && (
                        <Button size="sm" variant="outline" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            Código
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
