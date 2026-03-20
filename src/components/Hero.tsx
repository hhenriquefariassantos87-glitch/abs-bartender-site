import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background-novo.jpg";

const Hero = () => {
  const stats = [
    { value: "5+", label: "Anos de Experiência" },
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
      <div className="absolute inset-0 bg-black/70 md:bg-black/60"></div>

      <div className="container mx-auto px-4 relative z-10 pt-24 md:pt-0">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            <span className="text-foreground">Bartenders Premium</span>
            <br />
            <span className="text-foreground">para seus </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent italic">eventos</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-foreground/80 max-w-2xl mx-auto">
            Mais de 5 anos criando experiências inesquecíveis com coquetéis exclusivos e atendimento de excelência
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={() => scrollToSection("contato")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow text-base"
            >
              Solicitar Orçamento
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => scrollToSection("serviços")}
              className="text-base"
            >
              Conhecer Serviços
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card/80 backdrop-blur-md rounded-lg p-5 md:p-6 border border-border">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-foreground/70 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
