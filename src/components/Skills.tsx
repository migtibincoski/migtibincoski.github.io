import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "ReactJS", "TypeScript", "Tailwind CSS"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "PHP", "MySQL", "APIs REST"]
    },
    {
      category: "Ferramentas & Práticas",
      skills: ["Git", "PWA", "Clean Code", "Responsive Design", "Performance Optimization"]
    },
    {
      category: "Soft Skills",
      skills: ["Liderança", "Criatividade", "Design Thinking", "Comunicação", "Trabalho em Equipe"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Stack <span className="bg-gradient-primary bg-clip-text text-transparent">Tecnológico</span>
        </h2>
        
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          Tecnologias e habilidades para criar soluções completas e escaláveis
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:shadow-card hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 bg-muted text-foreground rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
