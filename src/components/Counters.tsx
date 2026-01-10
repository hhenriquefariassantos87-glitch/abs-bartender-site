import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";
import balcaoClassico from "@/assets/balcao-classico.jpg";
import balcaoPremiumNovo from "@/assets/balcao-premium-novo.jpg";
import balcaoRusticoNovo from "@/assets/balcao-rustico-novo.jpg";
import balcaoModerno from "@/assets/balcao-moderno.jpg";
import balcaoPersonalizado from "@/assets/balcao-personalizado.jpg";
import barMovel from "@/assets/bar-movel.jpg";

const Counters = () => {
  const [selectedCounter, setSelectedCounter] = useState<{ name: string; image: string } | null>(null);

  const counters = [
    { name: "Balcão Clássico", description: "Elegante e versátil", image: balcaoClassico },
    { name: "Balcão Premium", description: "Design com LED integrada", image: balcaoPremiumNovo },
    { name: "Balcão Rústico", description: "Para eventos ao ar livre", image: balcaoRusticoNovo },
    { name: "Balcão Moderno", description: "Linhas contemporâneas", image: balcaoModerno },
    { name: "Balcão Personalizado", description: "Sob medida", image: balcaoPersonalizado },
    { name: "Bar Móvel", description: "Praticidade e estilo", image: barMovel },
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
              className="hover:shadow-glow transition-all duration-300 bg-card border-border overflow-hidden group cursor-pointer"
              onClick={() => setSelectedCounter(counter)}
            >
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={counter.image} 
                  alt={counter.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">{counter.name}</h3>
                <p className="text-muted-foreground">{counter.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal para exibir imagem expandida */}
      {selectedCounter && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCounter(null)}
        >
          <button
            onClick={() => setSelectedCounter(null)}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-50"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-4xl max-h-[90vh] w-full">
            <img 
              src={selectedCounter.image} 
              alt={selectedCounter.name}
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white text-center mt-4 text-xl font-semibold">{selectedCounter.name}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Counters;
