"use client";

import { FeatureCard } from "@/components/ui/feature-card";
import { Countdown } from "@/components/ui/countdown";
import { InstagramFeed } from "@/components/ui/instagram-feed";
import { HamburgerMenu } from "@/components/ui/hamburger-menu";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

const products = [
  { 
    id: "1", 
    name: "Camisetas Personalizadas", 
    price: "$25.00", 
    originalPrice: "$30.00", 
    discount: "-15%", 
    image: "https://picsum.photos/seed/tshirt-mockup-white/800/1000",
  },
  { 
    id: "2", 
    name: "Sudaderas para Grupos", 
    price: "$45.00", 
    image: "https://picsum.photos/seed/hoodie-mockup-black/800/1000",
  },
  { 
    id: "3", 
    name: "Tazas Estampadas", 
    price: "$12.00", 
    image: "https://picsum.photos/seed/mug-mockup-white/800/1000",
  },
  { 
    id: "4", 
    name: "Tote Bags de Tela", 
    price: "$15.00", 
    image: "https://picsum.photos/seed/totebag-mockup-canvas/800/1000",
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white overflow-hidden">
      {/* Navigation Menu */}
      <header className="w-full py-6 lg:py-8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
            KAIA.
          </Link>
          <HamburgerMenu />
        </div>
      </header>

      <main className="w-full pb-0">
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 py-2 md:py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-12 lg:mb-16">

          {/* Left Column */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="w-full mb-12 lg:mb-24 pt-2 lg:pt-4">
              <h1 className="text-[2.75rem] sm:text-[4.5rem] lg:text-[100px] font-bold tracking-tighter leading-[0.9] mb-6 lg:mb-8 max-w-[900px]">
                Transformamos ideas en productos con propósito.
              </h1>
              <p className="text-base sm:text-xl text-gray-500 leading-relaxed max-w-[850px]">
                Taller de estampado y personalización en Madrid. Especialistas en camisetas, sudaderas, tazas y artículos para iglesias, empresas y marcas personales.
              </p>
            </div>

            <div className="w-full max-w-[460px] ml-0 lg:ml-12" id="servicios">
              <FeatureCard
                date="Línea 01"
                title="Iglesias y Ministerios"
                description="Camisetas y sudaderas para congresos, retiros espirituales y campamentos de jóvenes."
                initialBgImage="https://picsum.photos/seed/church-youth-camp/800/1200"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 flex flex-col items-end">
            <div className="hidden lg:flex mb-24 w-full justify-end transform origin-right translate-x-8">
               <div className="text-right">
                 <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Estudio Creativo</p>
                 <p className="text-2xl font-bold tracking-tighter">Madrid, ES</p>
               </div>
            </div>

            <div className="w-full max-w-[460px] mr-0 lg:mr-12">
              <FeatureCard
                date="Línea 02"
                title="Empresas y Negocios"
                description="Uniformes, merchandising y tazas personalizadas para oficinas, academias y regalos a clientes."
                initialBgImage="https://picsum.photos/seed/business-merch/800/1200"
              />
            </div>
          </div>

        </div>
        </section>

        {/* About Us Section */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 mt-10 md:mt-16 mb-16 md:mb-24" id="nosotros">
          <h2 className="text-[2.75rem] sm:text-[4.5rem] font-bold tracking-tighter leading-none mb-8 lg:mb-10">
            Quiénes Somos
          </h2>

          <div className="w-full relative aspect-[16/9] md:aspect-[2.2/1] mb-16">
            <Image
              src="https://picsum.photos/seed/printing-workshop-madrid/1920/800"
              alt="KAIA Workshop"
              fill
              className="object-cover grayscale"
              unoptimized
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-3">
              <p className="text-[15px] font-medium text-gray-700">Identidad y Mensaje</p>
            </div>

            <div className="md:col-span-4 flex flex-col justify-between gap-12">
              <p className="text-gray-400 text-[15px] leading-relaxed max-w-sm">
                Nacimos con un enfoque muy cercano al mundo de las iglesias y los congresos de jóvenes.
                <br className="hidden sm:block" />
                Hoy servimos también a empresas y público general.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative shrink-0 bg-black flex items-center justify-center text-white font-bold text-xl">
                  K
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-bold text-gray-900 leading-snug">Equipo KAIA</span>
                  <span className="text-[13px] text-gray-400">Taller de Estampado</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5">
              <p className="text-[1.35rem] leading-[1.4] font-medium text-gray-900 tracking-tight">
                En KAIA creemos que cada diseño debe comunicar identidad, mensaje y propósito. Por eso cuidamos tanto el lado creativo como la calidad de los materiales, manteniendo siempre un trato directo y cercano con cada cliente.
              </p>
            </div>
          </div>
        </section>

        {/* Store Section (Full Width) */}
        <section className="w-full grid grid-cols-1 md:grid-cols-2 min-h-[80vh] md:min-h-screen" id="tienda">
          {/* Left Banner */}
          <div className="relative w-full h-[50vh] md:h-full bg-gray-100 flex items-center justify-center overflow-hidden group">
            <Image 
              src="https://picsum.photos/seed/effortless-style/1200/1600" 
              alt="Nuestra Tienda" 
              fill 
              className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30"></div>
            <div className="absolute top-1/4 left-8 md:left-16 z-10">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2 text-white drop-shadow-lg">Nuestra<br/>Tienda</h2>
              <p className="text-lg md:text-xl text-white drop-shadow-md">Descubre nuestros productos</p>
            </div>
            <Link href="/tienda" className="absolute bottom-8 right-8 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors z-10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            </Link>
          </div>

          {/* Right Banner */}
          <div className="relative w-full h-[50vh] md:h-full bg-gray-200 flex items-center justify-center overflow-hidden group">
            <Image 
              src="https://picsum.photos/seed/everyday-essentials/1200/1600" 
              alt="Catálogo Completo" 
              fill 
              className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-center z-10 w-full px-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2 text-white">Catálogo Completo</h2>
              <p className="text-lg text-gray-200 mb-6">Trabajamos bajo pedido adaptándonos a ti.</p>
              <Link href="/tienda" className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
                Ver Todo
              </Link>
            </div>
          </div>
        </section>

        {/* Countdown Section */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 py-16 md:py-24 border-t border-gray-100">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Próxima Colección</h2>
            <p className="text-gray-500 mb-10 max-w-md">Estamos preparando algo increíble. No te pierdas el lanzamiento de nuestra nueva línea de básicos premium.</p>
            <Countdown />
          </div>
        </section>

        {/* Featured Products */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="flex justify-between items-end mb-10">
            <h3 className="text-2xl font-bold">Productos Destacados</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {products.map((product) => (
              <Link href={`/tienda/${product.id}`} key={product.id} className="group block">
                <div className="relative w-full aspect-[4/5] bg-[#F5F5F5] mb-4 overflow-hidden rounded-sm">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                    unoptimized 
                  />
                  {product.discount && (
                    <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-sm">
                      {product.discount}
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 line-clamp-1">{product.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-sm font-bold ${product.discount ? 'text-red-600' : 'text-gray-900'}`}>
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-500 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer" onClick={(e) => e.preventDefault()}>
                    <Heart size={18} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Instagram Feed Section */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 pb-16">
          <InstagramFeed />
        </section>
      </main>
    </div>
  );
}
