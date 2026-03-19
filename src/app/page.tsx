import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col h-[100dvh] bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 flex-1 flex flex-col justify-center items-center">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <img src="/logo.svg" alt="Fundador Logo" className="h-[4.5rem] sm:h-24 md:h-28 w-auto mb-6 sm:mb-8 md:mb-10" />
          <h1 className="text-[1.75rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-black mb-4 sm:mb-6 font-serif">
            ¿Querés comenzar tu cafetería y no sabés por dónde empezar?
          </h1>
          <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg text-zinc-600 max-w-2xl mx-auto font-sans leading-relaxed">
            En Fundador, te acompañamos desde 1980. Consultoría especializada, 
            máquinas profesionales y el mejor café para tu nuevo negocio.
          </p>
          <div className="mt-6 sm:mt-10 flex items-center justify-center gap-x-6">
            <WhatsAppButton />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
