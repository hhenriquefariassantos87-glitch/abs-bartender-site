import { Award, Shield, ThumbsUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Differentials = () => {
  const differentials = [
    {
      icon: Award,
      title: "Satisfação Garantida",
      description: "Equipe qualificada com mais de 10 anos de experiência no mercado",
    },
    {
      icon: Shield,
      title: "Reputação 100%",
      description: "Garantia completa em todos os detalhes do seu evento",
    },
    {
      icon: ThumbsUp,
      title: "Estrutura Própria",
      description: "Transporte e estrutura completa incluídos em todos os pacotes",
    },
  ];

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-primary">Diferenciais</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {differentials.map((item) => (
            <Card
              key={item.title}
              className="text-center hover:shadow-glow transition-all duration-300 bg-card border-border"
            >
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-accent mb-6">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
