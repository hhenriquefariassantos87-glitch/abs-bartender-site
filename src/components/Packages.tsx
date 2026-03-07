import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wine, GlassWater } from "lucide-react";

const Packages = () => {
  const packageCategories = [
    {
      tier: "Bronze",
      color: "from-amber-700 to-amber-900",
      badgeColor: "bg-amber-700 text-white",
      packages: [
        {
          name: "Bronze 1",
          drinks: ["Caipiroska", "Sakerinha de Frutas", "Caipirinha", "Tropical Mix", "Espanhola", "Caipivinho", "Coquetel sem álcool"],
        },
        {
          name: "Bronze 2",
          drinks: ["Caipiroska", "Sakerinha de Frutas", "Caipirinha", "Tropical Mix", "Espanhola", "Piña Colada", "Coquetel sem álcool"],
        },
        {
          name: "Bronze 3",
          drinks: ["Caipiroska", "Sakerinha de Frutas", "Caipirinha", "Tropical Mix", "Espanhola", "Caipivinho", "Piña Colada", "Mojito", "Sex On The Beach", "Coquetel sem álcool"],
        },
      ],
      destilados: "Vodka, Saquê, Cachaça, Vinho, Rum, Licor",
    },
    {
      tier: "Silver",
      color: "from-gray-400 to-gray-600",
      badgeColor: "bg-gray-400 text-gray-900",
      packages: [
        {
          name: "Silver 4",
          drinks: ["Caipiroska", "Sakerinha de Frutas", "Caipirinha", "Tropical Mix", "Espanhola", "Caipivinho", "Piña Colada", "Mojito", "Sex On The Beach", "Batida de Yakult", "Coquetel sem álcool"],
        },
        {
          name: "Silver 5",
          drinks: ["Caipiroska", "Sakerinha de Frutas", "Caipirinha", "Espanhola", "Caipivinho", "Exótica", "Mojito", "Caipibanana", "Coquetel sem álcool"],
        },
      ],
      destilados: "Vodka, Saquê, Cachaça, Rum, Gin, Licores, Aperitivos, Espumante",
    },
    {
      tier: "Gold",
      color: "from-yellow-500 to-amber-500",
      badgeColor: "bg-yellow-500 text-black",
      packages: [
        {
          name: "Gold 6",
          drinks: ["Caipiroska", "Sakerinha de Frutas", "Caipirinha", "Gin & Tônica", "Sex On The Beach", "Espanhola", "Exótica", "Piña Colada", "Coquetel sem álcool"],
        },
        {
          name: "Gold 7",
          drinks: ["Caipiroska", "Sakerinha de Frutas", "Caipirinha", "Aperol Spritz", "Sex On The Beach", "Mojito", "Piña Colada", "Espanhola", "Gin & Tônica", "Moscow Mule", "Exótica", "Coquetel sem álcool"],
        },
        {
          name: "Gold 8",
          drinks: ["Caipiroska", "Sakerinha de Frutas", "Campari com Laranja", "Gin & Tônica", "Moscow Mule", "Sex On The Beach", "Piña Colada", "Caipibanana", "Coconut", "Coquetel sem álcool"],
        },
      ],
      destilados: "Vodka, Saquê, Cachaça, Rum, Gin, Licores, Aperitivos, Espumante",
    },
    {
      tier: "Black",
      color: "from-gray-800 to-black",
      badgeColor: "bg-gray-900 text-white border border-gray-600",
      packages: [
        {
          name: "Black 9",
          drinks: ["Whisky Sour", "Fitzgerald", "Basil Smash", "Negroni", "Boulevardier", "Tree Limonee", "Gin & Tônica", "Aperol Spritz", "Campari com Laranja", "Caipiroska", "Sakerinha de Frutas", "Coquetel sem álcool"],
        },
      ],
      destilados: "Whisky, Gin, Aperitivos, Bitter, Vodka, Saquê, Espumante",
    },
  ];

  const mocktails = {
    tier: "Mocktail",
    subtitle: "100% Sem Álcool",
    packages: [
      {
        name: "Fresh 1",
        drinks: ["Coquetel de Frutas", "Virgin On The Beach", "Virgin Colada", "Tropical Mix", "Energy Drink", "Limonada Suíça", "Coquetel com Sorvete"],
      },
      {
        name: "Fresh 2",
        drinks: ["Coquetel de Frutas", "Virgin On The Beach", "Soda Italiana", "Energy Drink", "Limonada Suíça", "Coquetel com Sorvete"],
      },
      {
        name: "Fresh 3",
        drinks: ["Coquetel de Frutas", "Virgin On The Beach", "Virgin Colada", "Tropical Mix", "Energy Drink", "Soda Italiana", "Pink Limonade", "Limonada Suíça", "Coquetel com Sorvete"],
      },
    ],
  };

  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pacotes" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pacote Drinks <span className="text-primary">Moustache</span>
          </h2>
        </div>

        {/* Aviso */}
        <Card className="bg-card border-primary/30 mb-16 max-w-4xl mx-auto">
          <CardContent className="p-6 md:p-8 text-center space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Os valores variam de acordo com a quantidade de convidados, drinks escolhidos e tipos de destilados da sua preferência. Você receberá um orçamento completo com descritivos detalhados.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-primary font-semibold">Mínimo de 30 convidados.</span> A cada 30 pessoas, é disponibilizado <span className="text-primary font-semibold">1 bartender</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Caso tenha preferência por drinks fora de nossa cartilha, podemos incluir conforme sua preferência. Trabalhamos com <span className="text-primary font-semibold">cartilhas personalizadas</span>.
            </p>
          </CardContent>
        </Card>

        {/* Package Categories */}
        {packageCategories.map((category) => (
          <div key={category.tier} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className={`h-1 w-12 rounded bg-gradient-to-r ${category.color}`} />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Pacotes <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>{category.tier}</span> Moustache Experience
              </h3>
            </div>

            <div className={`grid grid-cols-1 ${category.packages.length >= 3 ? 'md:grid-cols-3' : category.packages.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-1 max-w-lg'} gap-6 mb-4`}>
              {category.packages.map((pkg) => (
                <Card key={pkg.name} className="bg-card border-border hover:shadow-glow transition-all duration-300 overflow-hidden">
                  <div className={`h-1.5 bg-gradient-to-r ${category.color}`} />
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Wine className="h-5 w-5 text-primary" />
                      <h4 className="text-xl font-bold text-foreground">{pkg.name}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {pkg.drinks.map((drink) => (
                        <Badge
                          key={drink}
                          variant="secondary"
                          className="text-xs font-normal bg-secondary text-secondary-foreground"
                        >
                          {drink}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              <span className="font-semibold text-primary">Destilados utilizados:</span> {category.destilados}
            </p>
          </div>
        ))}

        {/* Mocktails */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-1 w-12 rounded bg-gradient-to-r from-green-400 to-emerald-500" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Mocktail</span>
            </h3>
          </div>
          <p className="text-muted-foreground mb-8 ml-[60px]">100% Sem Álcool</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mocktails.packages.map((pkg) => (
              <Card key={pkg.name} className="bg-card border-border hover:shadow-glow transition-all duration-300 overflow-hidden">
                <div className="h-1.5 bg-gradient-to-r from-green-400 to-emerald-500" />
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <GlassWater className="h-5 w-5 text-green-400" />
                    <h4 className="text-xl font-bold text-foreground">{pkg.name}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {pkg.drinks.map((drink) => (
                      <Badge
                        key={drink}
                        variant="secondary"
                        className="text-xs font-normal bg-secondary text-secondary-foreground"
                      >
                        {drink}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button onClick={scrollToContact} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10">
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Packages;
