import { Card, CardContent } from "@/components/ui/card";
import { Wine } from "lucide-react";

const Counters = () => {
  const counters = [
    { name: "Balcão Clássico", description: "Elegante e versátil" },
    { name: "Balcão Premium", description: "Design com LED integrada" },
    { name: "Balcão Rústico", description: "Para eventos ao ar livre" },
    { name: "Balcão Moderno", description: "Linhas contemporâneas" },
    { name: "Balcão Personalizado", description: "Sob medida" },
    { name: "Bar Móvel", description: "Praticidade e estilo" },
  ];

  return (
    <section id="balcões" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-primary">Balcões</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estruturas elegantes e funcionais para seu evento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {counters.map((counter) => (
            <Card
              key={counter.name}
              className="hover:shadow-glow transition-all duration-300 bg-card border-border"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-accent">
                    <Wine className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{counter.name}</h3>
                    <p className="text-muted-foreground">{counter.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counters;
