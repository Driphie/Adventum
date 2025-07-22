const ProjectsSection = () => {
  const projects = [
    {
      name: "VIDAL 4672",
      location: "Saavedra",
      status: "Finalizado",
      image: "/images/1.jpg",
      url: "https://vidal4672.com.ar"
    },
    {
      name: "LA MERCED 5065",
      location: "Caseros",
      status: "En Obra",
      image: "/images/2.jpg",
      url: "https://lamerced5065.com.ar"
    }
  ];

  const handleProjectClick = (url: string) => {
    window.open(url, "_blank"); // abre en nueva pestaña
  };

  return (
    <section id="proyectos" className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-block mb-4">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Nuestro Trabajo</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 fade-up">
            Proyectos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>
        </div>
      </div>
      
      <div className="space-y-0">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className={`relative w-full h-screen cursor-pointer overflow-hidden group fade-up stagger-${index + 1}`}
            onClick={() => handleProjectClick(project.url)}
          >
            {/* Project Image Background */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-end">
              <div className="p-8 md:p-12 lg:p-16 w-full">
                <div
                  className={`bg-black/60 backdrop-blur-sm rounded-xl p-6 md:p-8 max-w-md transform transition-all duration-300 group-hover:translate-y-[-8px] ${
                    project.name === "LA MERCED 5065" ? "ml-auto" : ""
                  }`}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-primary text-lg font-medium mb-1">
                    {project.location}
                  </p>
                  <p className="text-white/80">
                    {project.status}
                  </p>
                </div>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary/10 opacity-100 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
