import teamPhoto from "@/assets/team-photo.jpg";

const About = () => {
  const stats = [
    { value: "500+", label: "Eventos Realizados" },
    { value: "10+", label: "Anos de Experiência" },
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
            <img
              src={teamPhoto}
              alt="Equipe Moustache Drinks"
              className="relative rounded-2xl shadow-card w-full"
            />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a <span className="text-primary font-script">Moustache Drinks</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Há mais de 10 anos no mercado, somos especializados em criar experiências inesquecíveis
              em casamentos, aniversários e eventos corporativos. Nossa equipe de bartenders profissionais
              traz toda expertise e paixão para transformar seu evento em um momento único.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Com estrutura completa própria, equipamentos profissionais e um cardápio personalizado de
              drinks exclusivos, garantimos que cada detalhe do seu bar seja perfeito.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-card rounded-lg p-6 border border-border">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
