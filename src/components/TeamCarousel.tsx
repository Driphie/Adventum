import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TeamCarousel = () => {
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

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    duration: 30,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="equipo" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 fade-up">
            Quiénes Somos
          </h2>
        </div>
        
        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className="flex-[0_0_100%] min-w-0 px-4 md:px-8"
                >
                  <div className="bg-background rounded-3xl p-8 md:p-12 shadow-2xl hover-lift mx-auto max-w-4xl">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                      {/* Photo */}
                      <div className="flex-shrink-0">
                        <div className="w-40 h-40 md:w-48 md:h-48 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full flex items-center justify-center shadow-lg">
                          <div className="w-32 h-32 md:w-40 md:h-40 bg-primary/30 rounded-full flex items-center justify-center">
                            <span className="text-foreground/70 text-sm text-center">
                              Foto
                              <br />
                              {member.name.split(' ')[0]}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 text-center lg:text-left">
                        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                          {member.name}
                        </h3>
                        <p className="text-lg md:text-xl text-muted-foreground font-medium mb-6">
                          {member.role}
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-6 lg:hidden">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 bg-primary/90 hover:bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
              aria-label="Previous team member"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={scrollNext}
              className="w-12 h-12 bg-primary/90 hover:bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
              aria-label="Next team member"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Desktop Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary/90 hover:bg-primary text-primary-foreground rounded-full items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl z-10"
            aria-label="Previous team member"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={scrollNext}
            className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary/90 hover:bg-primary text-primary-foreground rounded-full items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl z-10"
            aria-label="Next team member"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to team member ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel;