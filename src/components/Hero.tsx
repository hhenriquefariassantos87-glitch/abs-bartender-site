import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const stats = [
    { value: "10+", label: "Anos de Experiência" },
    { value: "500+", label: "Eventos Realizados" },
    { value: "100%", label: "Satisfação" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="início"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Bartenders Premium para seus{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">eventos</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Mais de 10 anos criando experiências inesquecíveis com coquetéis exclusivos e atendimento de excelência
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={() => scrollToSection("contato")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
            >
              Solicitar Orçamento
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => scrollToSection("serviços")}
            >
              Conhecer Serviços
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
