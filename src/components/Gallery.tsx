import { Card } from "@/components/ui/card";
import { useState } from "react";
import galeria1 from "@/assets/gallery-evento-1.jpg";
import galeria2 from "@/assets/gallery-evento-2.jpg";
import galeria3 from "@/assets/gallery-evento-3.jpg";
import galeria4 from "@/assets/gallery-evento-4.jpg";
import galeria5 from "@/assets/gallery-evento-5.jpg";
import galeria6 from "@/assets/gallery-evento-6.jpg";
import galeriaDrinks from "@/assets/gallery-drinks-profissionais.jpg";
import drinkAperolNovo from "@/assets/drink-aperol-novo.jpg";

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  // Fotos da galeria
  const photos = [
    { src: galeria1, title: "Flair Bartending em Casamento" },
    { src: galeria2, title: "Bar Corporativo Moderno" },
    { src: galeria3, title: "Festa de Aniversário" },
    { src: galeria4, title: "Formatura Elegante" },
    { src: galeria5, title: "Bar Móvel ao Ar Livre" },
    { src: galeria6, title: "Evento Premium Noturno" },
    { src: galeriaDrinks, title: "Drinks Profissionais" },
    { src: drinkAperolNovo, title: "Aperol Spritz Especial" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossa <span className="text-primary">Galeria</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Confira nossos eventos realizados
          </p>
        </div>

        {/* Fotos Section */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <Card
                key={index}
                className="group cursor-pointer overflow-hidden hover:shadow-glow transition-all duration-300 bg-card border-border"
                onClick={() => setSelectedMedia(photo.src)}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Modal para visualização */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-12 right-0 text-foreground hover:text-primary text-2xl font-bold"
            >
              ✕
            </button>
            <img
              src={selectedMedia}
              alt="Preview"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
