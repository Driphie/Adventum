const whatsappLogo = "/images/wp.png";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "541123482822";
    const message = "mensaje de prueba";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Pulse animation background with gradient */}
      <div className=""></div>
      
      {/* Outer glow ring */}
      <div className=""></div>
      
      {/* WhatsApp button with enhanced design */}
      <button
        onClick={handleWhatsAppClick}
        className=""
        aria-label="Contactar por WhatsApp"
        type="button"
      >
        {/* Inner highlight */}
        <div className="absolute inset-1 bg-gradient-to-t from-transparent to-white/30 rounded-full pointer-events-none"></div>
        
        <img 
          src={whatsappLogo} 
          alt="WhatsApp Logo"
          className="w-20 h-20 transition-transform duration-300 hover:rotate-12 relative z-10 drop-shadow-lg"
          key="whatsapp-logo-enhanced"
        />
      </button>
    </div>
  );
};

export default WhatsAppFloat;