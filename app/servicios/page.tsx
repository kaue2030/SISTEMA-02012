"use client";

import { HamburgerMenu } from "@/components/ui/hamburger-menu";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, MessageCircle, Mail } from "lucide-react";

const services = [
  {
    title: "Serigrafía Textil",
    description: "Ideal para grandes pedidos de camisetas, sudaderas y tote bags. Ofrece durabilidad legendaria y colores vibrantes que resisten múltiples lavados sin perder intensidad.",
    benefits: ["Durabilidad legendaria", "Rentable en grandes volúmenes", "Acabados profesionales"],
    image: "https://picsum.photos/seed/screen-printing/800/600"
  },
  {
    title: "Vinilo de Corte y Transfer",
    description: "Perfecto para personalización individual o pequeñas cantidades. Ideal para nombres, números deportivos o diseños de un solo color con un acabado nítido y duradero.",
    benefits: ["Desde 1 unidad", "Perfecto para nombres y números", "Alta nitidez en el diseño"],
    image: "https://picsum.photos/seed/vinyl-printing/800/600"
  },
  {
    title: "Sublimación de Artículos",
    description: "Tazas, lanyards y artículos de poliéster. Permite imprimir fotografías y diseños complejos a todo color con un acabado suave al tacto e imborrable.",
    benefits: ["Impresión a todo color", "Ideal para tazas y merchandising", "No se siente al tacto"],
    image: "https://picsum.photos/seed/sublimation/800/600"
  }
];

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Navigation Menu */}
      <header className="w-full py-6 lg:py-8 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
            KAIA.
          </Link>
          <HamburgerMenu />
        </div>
      </header>

      <main className="w-full pb-24">
        {/* Hero Section */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 py-12 md:py-24">
          <div className="max-w-[1000px] mb-16 lg:mb-24">
            <h1 className="text-[3rem] sm:text-[5rem] lg:text-[100px] font-bold tracking-tighter leading-[0.9] mb-8">
              Nuestros Servicios.
            </h1>
            <p className="text-xl sm:text-2xl text-gray-500 leading-relaxed">
              Ofrecemos soluciones de estampado profesional adaptadas a cada necesidad. Desde pequeñas marcas personales hasta grandes congresos de iglesias y merchandising corporativo.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-24">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`space-y-8 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <h2 className="text-4xl font-bold tracking-tighter">{service.title}</h2>
                  <p className="text-xl text-gray-600 leading-relaxed">{service.description}</p>

                  <ul className="space-y-4">
                    {service.benefits.map((benefit, bIndex) => (
                      <li key={bIndex} className="flex items-center gap-3">
                        <div className="bg-black text-white p-1 rounded-full">
                          <Check size={16} />
                        </div>
                        <span className="font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contacto" className="inline-flex items-center gap-2 font-bold hover:underline py-4 text-xl">
                    Solicitar presupuesto <ArrowRight size={24} />
                  </Link>
                </div>

                <div className={`relative aspect-[4/3] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 hover:scale-105"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 py-24 bg-gray-50 rounded-sm mt-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 italic uppercase">¿Listo para empezar tu proyecto?</h2>
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">Nuestro equipo te asesorará en la elección de la mejor técnica para que tu diseño luzca espectacular y profesional.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="https://wa.me/34600000000" className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity">
              <MessageCircle size={24} /> WhatsApp
            </Link>
            <Link href="/contacto" className="flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors">
              <Mail size={24} /> Formulario de contacto
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
