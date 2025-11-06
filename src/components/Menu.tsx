import { Card, CardContent } from "@/components/ui/card";
import drinkMojito from "@/assets/drink-mojito.jpg";
import drinkCaipirinha from "@/assets/drink-caipirinha.jpg";
import drinkGinTonica from "@/assets/drink-gin-tonica.jpg";
import drinkCosmopolitan from "@/assets/drink-cosmopolitan.jpg";
import drinkOldFashioned from "@/assets/drink-old-fashioned.jpg";
import drinkNegroni from "@/assets/drink-negroni.jpg";
import drinkMargarita from "@/assets/drink-margarita.jpg";
import drinkPinaColada from "@/assets/drink-pina-colada.jpg";
import drinkAperolSpritz from "@/assets/drink-aperol-spritz.jpg";

const Menu = () => {
  const drinks = [
    {
      name: "Mojito",
      description: "Rum, hortelã, limão e água com gás",
      image: drinkMojito,
    },
    {
      name: "Caipirinha",
      description: "Cachaça, limão e açúcar",
      image: drinkCaipirinha,
    },
    {
      name: "Gin Tônica",
      description: "Gin premium e água tônica",
      image: drinkGinTonica,
    },
    {
      name: "Cosmopolitan",
      description: "Vodka, cranberry e triple sec",
      image: drinkCosmopolitan,
    },
    {
      name: "Old Fashioned",
      description: "Whisky, açúcar e bitters",
      image: drinkOldFashioned,
    },
    {
      name: "Negroni",
      description: "Gin, vermute e Campari",
      image: drinkNegroni,
    },
    {
      name: "Margarita",
      description: "Tequila, triple sec e limão",
      image: drinkMargarita,
    },
    {
      name: "Piña Colada",
      description: "Rum, abacaxi e coco",
      image: drinkPinaColada,
    },
    {
      name: "Aperol Spritz",
      description: "Aperol, prosecco e soda",
      image: drinkAperolSpritz,
    },
  ];

  return (
    <section id="cardapio" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nosso <span className="text-primary">Cardápio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Drinks clássicos e exclusivos preparados por bartenders profissionais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {drinks.map((drink) => (
            <Card
              key={drink.name}
              className="overflow-hidden hover:shadow-glow transition-all duration-300 bg-card border-border group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    {drink.name}
                  </h3>
                  <p className="text-muted-foreground">{drink.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
