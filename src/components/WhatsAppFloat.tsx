import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    // User will add WhatsApp link later
    console.log("WhatsApp clicked - Link to be added by user");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle 
          size={24} 
          className="group-hover:scale-110 transition-transform duration-300"
        />
      </button>
      
      {/* Pulse animation */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
    </div>
  );
};

export default WhatsAppFloat;