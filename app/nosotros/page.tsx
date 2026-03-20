"use client";

import { HamburgerMenu } from "@/components/ui/hamburger-menu";
import Link from "next/link";
import Image from "next/image";

export default function NosotrosPage() {
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
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">Nosotros</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Nuestra Historia</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Fundada en el corazón de Madrid, KAIA nació como un pequeño taller familiar con una visión clara: elevar el estándar del estampado textil en España. Lo que comenzó como un proyecto personal para ayudar a iglesias locales con sus uniformes de jóvenes, pronto se convirtió en un estudio creativo de referencia para marcas y empresas.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Con más de una década de experiencia combinada en diseño gráfico y técnicas de impresión, nuestro equipo se dedica a transformar telas comunes en portadores de mensajes potentes y diseños memorables.
            </p>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100">
            <Image
              src="https://picsum.photos/seed/kaia-history/800/800"
              alt="Historia de KAIA"
              fill
              className="object-cover grayscale"
              unoptimized
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <div className="space-y-4">
            <div className="w-12 h-1 bg-black mb-6"></div>
            <h3 className="text-2xl font-bold uppercase tracking-tighter">Nuestra Misión</h3>
            <p className="text-gray-500 leading-relaxed">
              Empoderamos a comunidades, marcas y emprendedores a través de productos personalizados que comunican su identidad única con orgullo y calidad profesional.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-1 bg-black mb-6"></div>
            <h3 className="text-2xl font-bold uppercase tracking-tighter">Nuestra Visión</h3>
            <p className="text-gray-500 leading-relaxed">
              Ser el taller de estampado líder en sostenibilidad y creatividad, fusionando técnicas artesanales con tecnología de vanguardia para resultados impecables.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-1 bg-black mb-6"></div>
            <h3 className="text-2xl font-bold uppercase tracking-tighter">Valores</h3>
            <p className="text-gray-500 leading-relaxed">
              Calidad, cercanía y propósito. Cada prenda que sale de nuestro taller lleva el sello de compromiso con el cliente y el respeto por el diseño original.
            </p>
          </div>
        </div>

        <div className="bg-black text-white p-12 md:p-24 rounded-3xl">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 italic">&quot;El estampado no es solo tinta sobre tela; es la expresión de una idea que merece ser vista.&quot;</h2>
            <p className="text-xl text-gray-400">— El Equipo de KAIA</p>
          </div>
        </div>
      </main>
    </div>
  );
}
