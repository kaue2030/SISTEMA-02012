"use client";

import { useState, useEffect } from "react";
import { HamburgerMenu } from "@/components/ui/hamburger-menu";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, History, Heart, Target, Users } from "lucide-react";

const initialTeam = [
  { name: "Equipo KAIA", role: "Producción y Estampado", image: "https://picsum.photos/seed/printing-workshop-madrid/400/500" },
  { name: "Diseño Creativo", role: "Concepto y Arte", image: "https://picsum.photos/seed/design-team/400/500" }
];

export default function NosotrosPage() {
  const [content, setContent] = useState({
    history: "KAIA nació de una pasión por el diseño y la necesidad de ofrecer productos personalizados con un propósito claro. Empezamos en un pequeño taller en Madrid, enfocados en servir a iglesias y ministerios juveniles que buscaban una identidad visual potente para sus congresos y campamentos.",
    mission: "Empoderar a comunidades, iglesias y empresas a través de productos personalizados de alta calidad que comuniquen sus valores e identidad de manera impactante.",
    vision: "Convertirnos en el taller de referencia en España para proyectos creativos que buscan algo más que un simple estampado: una verdadera colaboración creativa."
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("kaia_nosotros");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          const timer = setTimeout(() => {
            setContent(parsed);
          }, 0);
          return () => clearTimeout(timer);
        } catch (e) {
          console.error("Error loading saved content", e);
        }
      }
    }
  }, []);

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
          <h1 className="text-[3rem] sm:text-[5rem] lg:text-[100px] font-bold tracking-tighter leading-[0.9] mb-12">
            Nuestra Historia.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
            <div className="md:col-span-8">
              <div className="relative aspect-video mb-12 overflow-hidden rounded-sm grayscale">
                <Image
                  src="https://picsum.photos/seed/workshop-vibe/1200/675"
                  alt="KAIA Workshop Origin"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                  unoptimized
                />
              </div>

              <div className="max-w-[800px] space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-black text-white p-3 rounded-full mt-1 shrink-0">
                    <History size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Desde Madrid al mundo</h2>
                    <p className="text-xl text-gray-600 leading-relaxed whitespace-pre-wrap">
                      {content.history}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-black text-white p-3 rounded-full mt-1 shrink-0">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Nuestros Valores</h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      Creemos en la excelencia, no como un fin, sino como un acto de servicio. Cada camiseta estampada, cada taza personalizada, lleva consigo el esfuerzo de un equipo que valora la calidad y el mensaje que el cliente quiere transmitir.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 bg-gray-50 p-8 rounded-sm sticky top-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Target size={20} /> Nuestra Misión
              </h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                {content.mission}
              </p>

              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Users size={20} /> Nuestra Visión
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {content.vision}
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 py-24 border-t border-gray-100">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-bold tracking-tighter uppercase">El Equipo detras de KAIA</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            {initialTeam.map((member, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[3/4] mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image src={member.image} alt={member.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" unoptimized />
                </div>
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}

            <div className="bg-black text-white p-8 md:p-12 flex flex-col justify-between rounded-sm">
              <h3 className="text-3xl font-bold tracking-tighter leading-none mb-8">Unete a nuestra lista de clientes</h3>
              <p className="text-gray-400 mb-10 leading-relaxed">Estamos listos para dar vida a tus ideas con la mejor calidad del mercado.</p>
              <Link href="/contacto" className="group flex items-center gap-2 font-bold text-white hover:underline">
                Hablemos ahora <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
