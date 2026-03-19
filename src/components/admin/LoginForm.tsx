"use client";

import { useState } from "react";
import { login } from "@/app/actions/auth";

export function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    const formData = new FormData(e.currentTarget);
    const result = await login(formData);

    if (result.success) {
      window.location.reload(); // Recarga para renderizar el Dashboard protegido
    } else {
      setError(result.error || "Error al iniciar sesión");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white p-8 rounded-3xl shadow-xl border border-zinc-200/60 text-center">
        <img src="/logo.svg" alt="Fundador Logo" className="h-16 w-auto mx-auto mb-8" />
        <h2 className="text-2xl font-bold font-serif text-black mb-6">Acceso Admin</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <div>
            <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Usuario</label>
            <input 
              required 
              type="text" 
              name="username" 
              autoComplete="username"
              className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:outline-none focus:border-[#A11126] focus:ring-1 focus:ring-[#A11126] bg-white text-zinc-900 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Contraseña</label>
            <input 
              required 
              type="password" 
              name="password" 
              autoComplete="current-password"
              className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:outline-none focus:border-[#A11126] focus:ring-1 focus:ring-[#A11126] bg-white text-zinc-900 transition-colors"
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="mt-4 bg-black text-white py-3.5 rounded-xl font-medium hover:bg-[#A11126] transition-colors disabled:opacity-50"
          >
            {loading ? "Verificando..." : "Ingresar"}
          </button>
          
          {error && (
            <p className="text-[#A11126] text-sm mt-3 text-center font-medium bg-red-50 py-2 rounded-lg">{error}</p>
          )}
        </form>
      </div>
    </div>
  );
}
