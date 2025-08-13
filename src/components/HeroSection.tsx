const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-muted/30 to-background pt-24 lg:pt-24">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        {/* Welcome Banner */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">

          {/* Centered Image */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <img 
                src="./adventum-logo2.png" 
                alt="Adventum Logo" 
                className="w-132 h-132 md:w-140 md:h-140 lg:w-148 lg:h-148 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            Espacios que suman calidad de vida
          </p>
          
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Video Container */}
        <div className="max-w-6xl mx-auto"> 
          <div className="relative group">
            {/* Video Frame with Professional Styling */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-card border border-border/50 p-2 md:p-4 backdrop-blur-sm animate-scale-in">
              {/* Inner Video Container */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
                <video 
                  className="w-full h-full object-cover transition-transform duration-700"
                  autoPlay 
                  playsInline
                  controls
                >
                  <source src="/images/VIDEOLANDING.mp4" type="video/mp4" />
                  {/* Fallback */}
                  <div className="absolute inset-0 bg-gradient-to-br from-muted via-muted/80 to-muted flex items-center justify-center">
                    <p className="text-muted-foreground">Video no disponible</p>
                  </div>
                </video>
                
                {/* Video Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              </div>
              
              {/* Frame Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-adventum-blue/20 to-primary/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg opacity-60"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-lg opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-lg opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg opacity-60"></div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="text-center mt-12 lg:mt-16 animate-fade-in">
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestros proyectos y cómo transformamos espacios para mejorar tu calidad de vida
          </p>
        </div>
        {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-4 w-2 h-32 bg-gradient-to-b from-primary/20 to-transparent rounded-full hidden lg:block"></div>
      <div className="absolute top-1/2 right-4 w-2 h-24 bg-gradient-to-b from-adventum-blue/20 to-transparent rounded-full hidden lg:block"></div>
      </div>
    </section>
  );
};

export default HeroSection;