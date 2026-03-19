"use client";

import { useState } from "react";
import { createLead } from "@/app/actions/leads";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const result = await createLead(formData);

    if (result.success) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <div className="bg-zinc-50 border border-zinc-200 p-6 md:p-8 rounded-2xl w-full max-w-xl mx-auto shadow-sm">
      <h3 className="text-2xl font-bold font-serif mb-6 text-black tracking-tight">Escribinos y te asesoramos</h3>
      {status === "success" ? (
        <div className="bg-green-50 text-green-800 p-6 rounded-xl flex items-center justify-center font-medium border border-green-200 text-center">
          ¡Gracias! Hemos recibido tu solicitud y te contactaremos a la brevedad.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <input 
            required 
            type="text" 
            name="name" 
            placeholder="Tu nombre completo" 
            className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:outline-none focus:border-[#A11126] focus:ring-1 focus:ring-[#A11126] transition-colors bg-white text-zinc-900"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              required 
              type="email" 
              name="email" 
              placeholder="Correo electrónico" 
              className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:outline-none focus:border-[#A11126] focus:ring-1 focus:ring-[#A11126] transition-colors bg-white text-zinc-900"
            />
            <input 
              type="tel" 
              name="phone" 
              placeholder="Teléfono móvil" 
              className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:outline-none focus:border-[#A11126] focus:ring-1 focus:ring-[#A11126] transition-colors bg-white text-zinc-900"
            />
          </div>
          <select 
            name="interest" 
            className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:outline-none focus:border-[#A11126] focus:ring-1 focus:ring-[#A11126] transition-colors bg-white text-zinc-900 bg-none"
          >
            <option value="Ambos">Quiero abrir mi cafetería</option>
            <option value="Consultoría">Solo necesito Consultoría Módulo</option>
            <option value="Máquinas">Quiero renovar Máquinas/Equipamiento</option>
          </select>
          <textarea 
            name="message" 
            placeholder="Cuéntanos brevemente si ya tenés un local visto, la etapa del proyecto..." 
            rows={3}
            className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:outline-none focus:border-[#A11126] focus:ring-1 focus:ring-[#A11126] transition-colors bg-white text-zinc-900 resize-none"
          ></textarea>
          
          <button 
            type="submit" 
            disabled={status === "loading"}
            className="mt-2 bg-black text-white py-4 rounded-xl font-medium hover:bg-[#A11126] hover:text-white transition-colors disabled:opacity-50"
          >
            {status === "loading" ? "Enviando Solicitud..." : "Solicitar Asesoramiento"}
          </button>
          
          {status === "error" && (
            <p className="text-[#A11126] text-sm mt-1 text-center font-medium">Hubo un error al enviar. Por favor verifica tus datos.</p>
          )}
        </form>
      )}
    </div>
  );
}
