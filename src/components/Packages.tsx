import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      name: "Básico",
      description: "Ideal para eventos pequenos e familiares",
      features: [
        "1 Bartender profissional",
        "Equipamentos básicos",
        "Cardápio com 10 drinks",
        "Até 50 pessoas",
        "Setup incluído",
      ],
      team: "1 Barman + 1 Barmec",
    },
    {
      name: "Premium",
      badge: "MAIS POPULAR",
      description: "Perfeito para casamentos e eventos médios",
      features: [
        "2 Bartenders",
        "Equipamentos completos",
        "20 drinks premium",
        "Até 100 pessoas",
        "Decoração temática",
        "Coqueteleira personalizada",
        "Setup incluído",
      ],
      team: "2 Barmen + 2 Barmecs",
    },
    {
      name: "Luxo",
      description: "Experiência completa para grandes eventos",
      features: [
        "3 Bartenders especializados",
        "Equipamentos premium",
        "Cardápio ilimitado",
        "Até 200 pessoas",
        "Bar móvel",
        "Show flair",
        "Drinks exclusivos",
        "Decoração completa",
        "Setup incluído",
      ],
      team: "3+ Barmen + Equipe completa",
    },
  ];

  const teamCalculation = [
    { guests: "Até 40 pessoas", team: "1 Barman + 1 Barmec" },
    { guests: "50-80 pessoas", team: "2 Barmen + 1 Barmec" },
    { guests: "100+ pessoas", team: "2 Barmen + 2 Barmecs" },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pacotes" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-primary">Pacotes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Escolha o pacote ideal para o seu evento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={`relative overflow-hidden hover:shadow-glow transition-all duration-300 bg-card border-border ${
                pkg.badge ? "border-primary border-2" : ""
              }`}
            >
              {pkg.badge && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">{pkg.badge}</Badge>
                </div>
              )}
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-2 text-foreground">{pkg.name}</h3>
                <p className="text-muted-foreground mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mb-6 p-4 bg-gradient-accent rounded-lg">
                  <p className="text-sm font-semibold text-foreground">{pkg.team}</p>
                </div>
                <Button onClick={scrollToContact} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card border-border">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
              Cálculo de Equipe por Número de Convidados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamCalculation.map((item) => (
                <div
                  key={item.guests}
                  className="text-center p-6 bg-gradient-accent rounded-lg"
                >
                  <div className="text-xl font-bold text-primary mb-2">{item.guests}</div>
                  <div className="text-muted-foreground">{item.team}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Packages;
