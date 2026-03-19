import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 pt-16 pb-20 md:pt-24 md:pb-32 flex flex-col justify-center items-center">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <img src="/logo.svg" alt="Fundador Logo" className="h-[4.5rem] sm:h-24 md:h-28 w-auto mb-6 sm:mb-8 md:mb-10" />
          <h1 className="text-[1.75rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-black mb-4 sm:mb-6 font-serif">
            ¿Querés comenzar tu cafetería y no sabés por dónde empezar?
          </h1>
          <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg text-zinc-600 max-w-2xl mx-auto font-sans leading-relaxed">
            En Fundador, te acompañamos desde 1980. Consultoría especializada, 
            máquinas profesionales y el mejor café para tu nuevo negocio.
          </p>
          <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton />
            <a href="#contacto" className="px-8 py-4 border-2 border-zinc-200 text-zinc-600 font-medium rounded-full hover:border-[#A11126] hover:text-[#A11126] hover:bg-zinc-50 transition-all duration-300">
              Enviar Consulta
            </a>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="contacto" className="w-full bg-white px-4 sm:px-6 pb-24 border-t border-zinc-100 pt-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start justify-center">
          <div className="max-w-md text-center lg:text-left lg:pt-8 w-full">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">Hablemos de tu proyecto</h2>
            <p className="text-zinc-600 mb-8 font-sans leading-relaxed">
              Completá el formulario con los detalles de tu emprendimiento o cafetería actual, prometemos responderte a la brevedad con el asesoramiento que necesitas.
            </p>
            <div className="inline-flex flex-col gap-2 p-6 bg-zinc-50 rounded-2xl border border-zinc-100 text-left w-full">
              <h4 className="font-bold text-[#A11126] text-sm uppercase tracking-widest">¿Qué ofrece la consultoría?</h4>
              <ul className="text-sm text-zinc-600 space-y-3 mt-3 leading-relaxed">
                <li className="flex gap-2"><span>☕</span> <span>Evaluación del espacio físico y flujos de trabajo.</span></li>
                <li className="flex gap-2"><span>⚙️</span> <span>Selección de equipos adecuados para tu volumen.</span></li>
                <li className="flex gap-2"><span>🎓</span> <span>Capacitaciones de barismo profesional y calibración.</span></li>
              </ul>
            </div>
          </div>
          <div className="w-full max-w-xl">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
