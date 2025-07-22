const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/80 z-10"></div>
      
      {/* Placeholder for video - user will add later */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-20"></div>
      
      {/* Content */}
      <div className="relative z-30 text-center px-4 fade-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Adventum S.A.
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-adventum-light font-light max-w-4xl mx-auto">
          Espacios que suman calidad de vida
        </p>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="w-1 h-12 bg-white/30 rounded-full">
          <div className="w-1 h-4 bg-primary rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;