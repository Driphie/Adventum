import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";


const TeamCarousel = () => {
  const teamMembers = [
    {
      name: "Luis Feld",
      role: "Presidente de Adventum",
      description: "Luis es un empresario emprendedor, con más de 30 años de experiencia en el desarrollo de negocios de inversión, caracterizado por su visión estratégica y capacidad para identificar oportunidades de crecimiento en el mercado inmobiliario.",
      fullDescription: "Luis es un empresario emprendedor, con más de 30 años de experiencia en el desarrollo de negocios de inversión en el mercado nacional e internacional. Con una visión innovadora y creativa, desarrolló negocios agroindustriales e inmobiliarios. Como líder de proyectos, ha sabido conjugar exitosamente, el talento para los negocios, con la formación y el liderazgo de los equipos profesionales que lo acompañan, sin perder de vista las virtudes y los valores éticos.",
      img: "/images/l2.JPG", // Reemplaza con la ruta de la imagen de Luis
    },
    {
      name: "Mariano Solowieiczyk",
      role: "Diseñador del proyecto",
      description: "Arquitecto recibido en 1999, desarrolló su carrera en reconocidos estudios de arquitectura, especializándose en proyectos residenciales de alta gama con enfoque en diseño sustentable y calidad de vida.",
      fullDescription: "Arquitecto recibido en 1999, desarrolló su carrera en reconocidos estudios de arquitectura, entre ellos VSV. Entre 1998 y 2006 fue docente en la Facultad de Arquitectura de la UBA. En 2005 abrió su propia oficina, donde comenzó a desarrollar sus primeros edificios de viviendas. En 2008 y 2009 realizó posgrados en Gestión de Activos Inmobiliarios en la Universidad Torcuato Di Tella, Dirección de Empresas de Arquitectura y Construcción en ESEADE, y Diseño Sustentable en la Universidad de Palermo. En 2010 fundó el estudio VS Arquitectos.",
      img: "/images/m3.JPG", // Reemplaza con la ruta de la imagen de Mariano
    },
    {
      name: "Javier Vila",
      role: "Diseñador del proyecto",
      description: "Arquitecto egresado en 1995 de la Facultad de Arquitectura de la UBA, con amplia experiencia en desarrollos inmobiliarios y planificación urbana, destacándose por su enfoque innovador en espacios habitacionales.",
      fullDescription: "Arquitecto egresado en 1995 de la Facultad de Arquitectura de la Universidad de Buenos Aires, fundó el estudio Vila Sebastian Vila & Asociados, dedicado a proyectos de diversas escalas. Entre 1994 y 1995 se desempeñó como docente en la Facultad de Arquitectura de la UBA. En 1998 recibió el Premio Vitruvio a la Arquitectura Emergente, otorgado por el Consejo Profesional de Arquitectura y Urbanismo y el Museo Nacional de Bellas Artes. En 2010 cofundó el estudio VS Arquitectos.",
      img: "/images/m4.JPG", // Reemplaza con la ruta de la imagen de Javier
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
          <div className="inline-block mb-4">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Nuestro Equipo</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-foreground mb-6 fade-up">
            Quiénes Somos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>
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
                       <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg ring-4 ring-primary/20">
                          <img
                            src={member.img}
                            alt={`Foto de ${member.name}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 text-center lg:text-left">
                        <h3 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                          {member.name}
                        </h3>
                        <p className="text-lg md:text-3xl text-muted-foreground font-medium mb-6">
                          {member.role}
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-2xl mb-6">
                          {member.description}
                        </p>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="mt-2"
                            >
                              Leer más
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <div className="flex flex-col items-center space-y-8">
                                {/* Photo in modal */}
                                <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg ring-4 ring-primary/60">
                                  <img
                                    src={member.img}
                                    alt={`Foto de ${member.name}`}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="text-center">
                                  <DialogTitle className="text-4xl font-bold text-primary mb-2">
                                    {member.name}
                                  </DialogTitle>
                                  <p className="text-muted-foreground font-medium text-3xl">
                                    {member.role}
                                  </p>
                                </div>
                              </div>
                            </DialogHeader>
                            <div className="text-muted-foreground leading-relaxed text-justify space-y-4 text-1xl">
                              {member.fullDescription.split('. ').map((paragraph, idx) => (
                            <p key={idx}>
                            {paragraph.trim()}{paragraph.endsWith('.') ? '' : '.'}
                            </p>
                              ))}
                            </div>
                          </DialogContent>
                        </Dialog>
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