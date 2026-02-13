import { Card } from "@/components/ui/card";
import { useState } from "react";
import drinkMojito from "@/assets/drink-mojito.jpg";
import drinkCaipirinha from "@/assets/drink-caipirinha.jpg";
import drinkGinTonica from "@/assets/drink-gin-tonica.jpg";
import drinkEspecial from "@/assets/drink-exclusivo-novo.jpg";
import drinkOldFashioned from "@/assets/drink-old-fashioned.jpg";
import drinkNegroni from "@/assets/drink-negroni.jpg";
import drinkMargarita from "@/assets/drink-margarita.jpg";
import drinkPinaColada from "@/assets/drink-pina-colada.jpg";
import drinkAperolSpritz from "@/assets/drink-aperol-novo.jpg";
import drinkMoustache from "@/assets/drink-moustache.jpg";

const Menu = () => {
  const [selectedDrink, setSelectedDrink] = useState<{ name: string; image: string } | null>(null);

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
      name: "Drink Especial",
      description: "Drink exclusivo da casa",
      image: drinkEspecial,
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
    {
      name: "Moustache Drink",
      description: "Drink signature da casa",
      image: drinkMoustache,
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
              className="overflow-hidden hover:shadow-glow transition-all duration-300 bg-card border-border group cursor-pointer"
              onClick={() => setSelectedDrink({ name: drink.name, image: drink.image })}
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

      {/* Modal para visualização expandida */}
      {selectedDrink && (
        <div
          className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedDrink(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedDrink(null)}
              className="absolute -top-12 right-0 text-foreground hover:text-primary text-4xl transition-colors"
            >
              ✕
            </button>
            <img
              src={selectedDrink.image}
              alt={selectedDrink.name}
              className="w-full h-auto rounded-lg max-h-[80vh] object-contain"
            />
            <p className="text-center text-foreground text-xl font-bold mt-4">{selectedDrink.name}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Menu;
