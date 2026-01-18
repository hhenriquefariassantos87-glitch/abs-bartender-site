import { Card } from "@/components/ui/card";
import { useState, useRef, useEffect } from "react";
import galeria1 from "@/assets/gallery-limoes-licor.jpg";
import galeria2 from "@/assets/gallery-evento-2.jpg";
import galeria3 from "@/assets/gallery-bar-setup.jpg";
import galeria4 from "@/assets/gallery-evento-4.jpg";
import galeria5 from "@/assets/gallery-evento-5.jpg";
import galeria6 from "@/assets/gallery-evento-6.jpg";
import galeriaDrinks from "@/assets/gallery-drinks-profissionais.jpg";
import drinkAperolNovo from "@/assets/drink-aperol-novo.jpg";
import galeria7 from "@/assets/gallery-evento-7.jpg";
import videoEvento from "@/assets/video-evento.mp4";

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const [videoExpanded, setVideoExpanded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  // Autoplay quando visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play();
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Fotos da galeria
  const photos = [
    { src: galeria1, title: "Limões e Licor de Morango" },
    { src: galeria2, title: "Bar Corporativo Moderno" },
    { src: galeria3, title: "Estação de Bar Profissional" },
    { src: galeria4, title: "Formatura Elegante" },
    { src: galeria5, title: "Bar Móvel ao Ar Livre" },
    { src: galeria6, title: "Evento Premium Noturno" },
    { src: galeriaDrinks, title: "Drinks Profissionais" },
    { src: drinkAperolNovo, title: "Aperol Spritz Especial" },
    { src: galeria7, title: "Mesa de Frutas e Drinks" },
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

        {/* Video Section */}
        <div className="mt-16" ref={videoContainerRef}>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold">
              Veja nosso <span className="text-primary">trabalho</span>
            </h3>
          </div>
          <div 
            className="max-w-4xl mx-auto cursor-pointer"
            onClick={() => setVideoExpanded(true)}
          >
            <Card className="overflow-hidden hover:shadow-glow transition-all duration-300 bg-card border-border">
              <video
                ref={videoRef}
                src={videoEvento}
                className="w-full h-auto"
                muted
                loop
                playsInline
              />
            </Card>
          </div>
        </div>
      </div>

      {/* Modal para fotos */}
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

      {/* Modal para vídeo expandido */}
      {videoExpanded && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setVideoExpanded(false)}
        >
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setVideoExpanded(false)}
              className="absolute -top-12 right-0 text-foreground hover:text-primary text-2xl font-bold"
            >
              ✕
            </button>
            <video
              src={videoEvento}
              className="w-full h-auto rounded-lg"
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
