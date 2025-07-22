const TeamSection = () => {
  const teamMembers = [
    {
      name: "Luis Feld",
      role: "Presidente de Adventum",
      description: "Luis es un empresario emprendedor, con más de 30 años de experiencia en el desarrollo de negocios de inversión, caracterizado por su visión estratégica y capacidad para identificar oportunidades de crecimiento en el mercado inmobiliario.",
    },
    {
      name: "Mariano Solowieiczyk",
      role: "Diseñador del proyecto",
      description: "Arquitecto recibido en 1999, desarrolló su carrera en reconocidos estudios de arquitectura, especializándose en proyectos residenciales de alta gama con enfoque en diseño sustentable y calidad de vida.",
    },
    {
      name: "Javier Vila",
      role: "Diseñador del proyecto",
      description: "Arquitecto egresado en 1995 de la Facultad de Arquitectura de la UBA, con amplia experiencia en desarrollos inmobiliarios y planificación urbana, destacándose por su enfoque innovador en espacios habitacionales.",
    },
  ];

  return (
    <section id="equipo" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Nuestro Equipo</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 fade-up">
            Quiénes Somos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`bg-background rounded-2xl p-8 shadow-lg hover-lift fade-up stagger-${index + 1}`}
            >
              {/* Photo placeholder - user will add later */}
              <div className="mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full mx-auto flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary/30 rounded-full flex items-center justify-center">
                    <span className="text-foreground/70 text-sm text-center">
                      Foto
                      <br />
                      {member.name.split(' ')[0]}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {member.name}
                </h3>
                <p className="text-muted-foreground font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;