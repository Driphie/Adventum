import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "541123482822";
    const message = "mensaje de prueba";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Pulse animation background */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75 pointer-events-none"></div>
      
      {/* WhatsApp button */}
      <button
        onClick={handleWhatsAppClick}
        className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer z-10"
        aria-label="Contactar por WhatsApp"
        type="button"
      >
        <MessageCircle 
          size={28} 
          className="transition-transform duration-300 hover:rotate-12"
        />
      </button>
    </div>
  );
};

export default WhatsAppFloat;