import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fundador | Tu Socio en Café desde 1980 | Consultoría y Máquinas en Uruguay",
  description:
    "¿Querés comenzar tu cafetería en Uruguay? Fundador te ofrece consultoría especializada, máquinas de café profesionales, grano de especialidad e insumos. Desde 1980 acompañando a los cafeteros de Montevideo y el interior. Contactanos.",
  keywords: [
    "comenzar cafetería uruguay",
    "consultoría cafetería montevideo",
    "máquinas de café profesionales uruguay",
    "proveedores café especialidad uruguay",
    "insumos para cafeterías uruguay",
    "combos cafetera molino uruguay",
    "fundador café uruguay",
    "fundar cafeteria montevideo",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Fundador | Tu Socio Cafetero B2B desde 1980",
    description:
      "Consultoría, Máquinas y Café para tu cafetería. Todo lo que necesitás para empezar en Uruguay.",
    url: "https://fundador.uy/",
    images: [{ url: "https://fundador.uy/og-image-b2b.png" }],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Fundador Café",
  image: "https://fundador.uy/logo.png",
  founder: "Fundador (est. 1980)",
  foundingDate: "1980",
  url: "https://fundador.uy/",
  telephone: "+59899123456", // Reemplazar
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle de ejemplo", // Reemplazar
    addressLocality: "Montevideo",
    addressRegion: "Montevideo",
    postalCode: "11000", // Reemplazar
    addressCountry: "UY",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  description:
    "Tu socio integral B2B para la apertura y operación de cafeterías de especialidad en Uruguay.",
  knowsAbout: [
    "Consultoría de cafeterías",
    "Suministro de máquinas de café",
    "Café de especialidad en grano",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} min-h-full flex flex-col font-sans bg-white text-zinc-900`}
      >
        {children}
      </body>
    </html>
  );
}
