const CompanySection = () => {
  return (
    <section id="empresa" className="section-padding bg-adventum-light text-black">
      <div className="flex flex-col lg:flex-row min-h-[70vh]">
        {/* Content - Left Half */}
        <div className="w-full lg:w-1/2 flex items-center px-6 sm:px-8 lg:pl-16 py-8 lg:py-0">
          <div className="fade-left max-w-xl mx-auto lg:mx-0">
            <h2 className="text-3xl md:text-3xl lg:text-7xl font-bold text-black mb-6">
              La Empresa
            </h2>
            
            <h3 className="text-xl md:text-3xl text-adventum-gold font-medium mb-8">
              "Espacios que suman calidad de vida"
            </h3>
            
            <div className="space-y-6 text-black/80 text-2xl leading-relaxed">
              <p>
                <strong className="text-black">Diseño, calidad y bienestar en cada proyecto.</strong>
                <br />
                Creamos desarrollos donde la amplitud, la luz natural y los espacios verdes son protagonistas.
              </p>
              
              <p>
                Cada plano y amenitie está pensado para ofrecer confort, funcionalidad y calidad de vida, 
                generando espacios que no solo se disfrutan, sino que también se valoran con el tiempo.
              </p>
              
              <p className="text-adventum-gold font-medium">
                Nuestra misión es transformar nuestro hábitat creando espacios que conecten a las personas 
                con la naturaleza, el confort y la calidad de vida.
              </p>
            </div>
          {/* Image on mobile - positioned after text */}
            <div className="lg:hidden mt-8">
              <div className="fade-up stagger-1">
                <div className="relative overflow-hidden rounded-xl shadow-xl hover-lift h-64 w-full max-w-sm mx-auto">
                  <img 
                    src="/laempresa.png" 
                    alt="La Empresa - Espacios arquitectónicos de calidad"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Image - Right Half (Desktop only) */}
        <div className="hidden lg:block w-full lg:w-1/2 py-8 lg:py-12 px-6 sm:px-8 lg:pr-16">
          <div className="fade-up stagger-1 h-full min-h-[400px] lg:min-h-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover-lift h-full">
                            <img 
                src="/laempresa.png" 
                alt="La Empresa - Espacios arquitectónicos de calidad"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;