"use client";

import { HamburgerMenu } from "@/components/ui/hamburger-menu";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Serigrafía Textil",
    description: "Ideal para grandes tiradas de camisetas, sudaderas y tote bags. Ofrece una durabilidad excepcional y colores vibrantes que resisten múltiples lavados sin perder intensidad.",
    benefits: ["Durabilidad legendaria", "Rentable en volúmenes altos", "Acabados profesionales"],
    image: "https://picsum.photos/seed/screen-printing/800/600"
  },
  {
    title: "Vinilo de Corte y Térmico",
    description: "Perfecto para personalización individual, dorsales deportivos o diseños de un solo color. Permite una precisión increíble y se adapta a casi cualquier tipo de tejido.",
    benefits: ["Sin pedido mínimo", "Ideal para dorsales y nombres", "Gama de acabados especiales"],
    image: "https://picsum.photos/seed/vinyl-cutting/800/600"
  },
  {
    title: "Sublimación",
    description: "Técnica estrella para tazas y prendas técnicas 100% poliéster. La tinta se funde con el material, creando un diseño que no se siente al tacto y no se agrieta nunca.",
    benefits: ["Tacto cero", "Colores fotográficos", "Ideal para merchandising"],
    image: "https://picsum.photos/seed/sublimation/800/600"
  }
];

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <header className="w-full py-6 lg:py-8 absolute top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
            KAIA.
          </Link>
          <HamburgerMenu />
        </div>
      </header>
      <main className="w-full pt-32 pb-24 max-w-[1400px] mx-auto px-4 sm:px-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">Nuestros Servicios</h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-24">
          Ofrecemos soluciones de estampado profesional adaptadas a cada necesidad. Desde pequeñas marcas personales hasta grandes congresos de iglesias y merchandising corporativo.
        </p>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-last' : ''}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
                <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, bIndex) => (
                    <li key={bIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-video rounded-3xl overflow-hidden bg-gray-100 shadow-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-gray-50 rounded-3xl text-center">
          <h3 className="text-3xl font-bold mb-4">¿No estás seguro de qué técnica necesitas?</h3>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">Nuestro equipo te asesorará para elegir el método más adecuado según tu diseño, el tipo de prenda y la cantidad que busques.</p>
          <Link href="/contacto" className="inline-block bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors tracking-widest uppercase text-sm">
            Consulta Gratuita
          </Link>
        </div>
      </main>
    </div>
  );
}
