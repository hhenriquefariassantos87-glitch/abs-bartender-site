import { Card, CardContent } from "@/components/ui/card";
import casamentos from "@/assets/casamentos.jpg";
import aniversarios from "@/assets/aniversarios.jpg";
import eventosCorporativos from "@/assets/eventos-corporativos.jpg";
import festasEspeciais from "@/assets/festas-especiais.jpg";

const Events = () => {
  const events = [
    { name: "Casamentos", icon: "💍", image: casamentos },
    { name: "Aniversários", icon: "🎂", image: aniversarios },
    { name: "Eventos Corporativos", icon: "💼", image: eventosCorporativos },
    { name: "Festas Especiais", icon: "🎉", image: festasEspeciais },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tipos de <span className="text-primary">Eventos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Especializados em diversos tipos de celebrações
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <Card
              key={event.name}
              className="group cursor-pointer overflow-hidden hover:shadow-glow transition-all duration-300 bg-card border-border"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 text-4xl">{event.icon}</div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-center text-foreground">{event.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
