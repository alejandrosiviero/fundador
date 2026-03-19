import Link from "next/link";
import { Mail, Phone, Lock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-100 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-2">
          <img src="/logo.svg" alt="Fundador Logo" className="h-8 md:h-10 w-auto opacity-80 mix-blend-multiply" />
          <p className="text-zinc-500 text-xs sm:text-sm font-sans max-w-xs">
            Tu socio estratégico para el desarrollo de cafeterías de especialidad desde 1980.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8">
          <div className="flex items-center gap-2 text-zinc-600 hover:text-[#A11126] transition-colors">
            <Mail className="w-4 h-4" />
            <a href="mailto:contacto@fundador.uy" className="text-sm font-medium">contacto@fundador.uy</a>
          </div>
          <div className="flex items-center gap-2 text-zinc-600 hover:text-[#A11126] transition-colors">
            <Phone className="w-4 h-4" />
            <a href="tel:+59899123456" className="text-sm font-medium">+598 99 123 456</a>
          </div>
          <div className="h-4 w-px bg-zinc-200 hidden md:block"></div>
          <Link href="/admin" className="flex items-center gap-2 text-zinc-400 hover:text-zinc-600 transition-colors">
            <Lock className="w-4 h-4" />
            <span className="text-sm font-medium">Admin</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
