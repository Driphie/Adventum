import { Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              <img src="./adventum-logo2.png" alt=""/>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Espacios que suman calidad de vida. Creamos desarrollos donde la amplitud, 
              la luz natural y los espacios verdes son protagonistas.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/desarrolladoraadventum"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors duration-300 group"
              >
                <Instagram 
                  className="text-primary group-hover:scale-110 transition-transform duration-300" 
                  size={20} 
                />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-foreground mb-6">
              Información de Contacto
            </h4>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-foreground font-medium">Dirección</p>
                  <p className="text-muted-foreground text-sm">
                    Vidal 4672, Piso 4<br />
                    Saavedra, Capital Federal
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="text-primary mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-foreground font-medium">Email</p>
                  <a 
                    href="mailto:comercial@adventum.com.ar"
                    className="text-primary hover:text-primary/80 transition-colors duration-300 text-sm"
                  >
                    comercial@adventum.com.ar
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="text-primary mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-foreground font-medium">Teléfono</p>
                  <a 
                    href="tel:+5491124681383"
                    className="text-primary hover:text-primary/80 transition-colors duration-300 text-sm"
                  >
                    +54 9 11 2468-1383
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Adventum S.A. Todos los derechos reservados.
            </p>
            <p className="text-muted-foreground text-sm">
              Desarrollado con calidad y profesionalismo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;