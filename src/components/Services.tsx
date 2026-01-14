import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import bartendersProfissionais from "@/assets/bartenders-profissionais.jpg";
import estruturaCompleta from "@/assets/estrutura-completa.jpg";
import drinksExclusivos from "@/assets/drinks-exclusivos.jpg";
import { Check } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Bartenders Profissionais",
      image: bartendersProfissionais,
      features: [
        "Coquetéis clássicos",
        "Atendimento especial",
        "Receitas exclusivas",
        "Drinks personalizados",
      ],
    },
    {
      title: "Estrutura Completa",
      image: estruturaCompleta,
      features: [
        "Módulos de bar",
        "Utensílios completos",
        "Equipamentos profissionais",
        "Transporte incluído",
      ],
    },
    {
      title: "Drinks Exclusivos",
      image: drinksExclusivos,
      features: [
        "Receitas únicas",
        "Menu personalizado",
        "Ingredientes premium",
        "Coquetéis personalizados",
      ],
    },
  ];

  return (
    <section id="serviços" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experiência completa para tornar seu evento único e memorável
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="overflow-hidden hover:shadow-glow transition-all duration-300 bg-card border-border">
              {service.title === "Bartenders Profissionais" ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="overflow-hidden bg-background h-80 cursor-pointer">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full hover:scale-110 transition-transform duration-300 object-cover"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              ) : service.title === "Estrutura Completa" ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="overflow-hidden bg-background h-80 cursor-pointer">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full hover:scale-110 transition-transform duration-300 object-cover"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              ) : (
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="overflow-hidden bg-background h-80 cursor-pointer">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full hover:scale-110 transition-transform duration-300 object-cover"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              )}
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
