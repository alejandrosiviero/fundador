"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";

export function WhatsAppButton() {
  const [isClicking, setIsClicking] = useState(false);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isClicking) return;
    setIsClicking(true);

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventType: 'whatsapp_click',
          sourceUrl: window.location.href,
        })
      });
    } catch (error) {
      console.error("Error tracking click", error);
    } finally {
      setIsClicking(false);
      
      const whatsappMessage = encodeURIComponent(
        "Hola Fundador. Estoy interesado en abrir mi cafetería y vi su sitio web fundador.uy. Me gustaría recibir asesoramiento sobre consultoría y/o máquinas de café. Gracias."
      );
      const whatsappUrl = `https://wa.me/59899123456?text=${whatsappMessage}`;
      
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <button 
      onClick={handleClick}
      className="group relative flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-medium transition-all duration-300 border-2 border-transparent hover:bg-[#A11126] hover:text-white active:scale-95 shadow-xl"
    >
      {/* Icono de Chat Real (WhatsApp style) */}
      <MessageCircle className="w-6 h-6 text-[#A11126] group-hover:text-white transition-colors" />
      <span className="text-lg">
        {isClicking ? "Abriendo..." : "Contactar por WhatsApp"}
      </span>
      
      {/* Borde sutil de la marca */}
      <div className="absolute inset-0 rounded-full border-2 border-[#A11126]/20 group-hover:border-transparent transition-all" />
    </button>
  );
}
