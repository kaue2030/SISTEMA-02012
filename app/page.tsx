"use client";

import { FeatureCard } from "@/components/ui/feature-card";
import { Countdown } from "@/components/ui/countdown";
import { InstagramFeed } from "@/components/ui/instagram-feed";
import { HamburgerMenu } from "@/components/ui/hamburger-menu";
import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";

const products = [
  { 
    id: "1", 
    name: "Camisetas Personalizadas", 
    price: "€15.00",
    originalPrice: "€20.00",
    discount: "-25%",
    image: "https://picsum.photos/seed/tshirt-mockup-white/800/1000",
  },
  { 
    id: "2", 
    name: "Sudaderas para Grupos", 
    price: "€25.00",
    image: "https://picsum.photos/seed/hoodie-mockup-black/800/1000",
  },
  { 
    id: "3", 
    name: "Tazas Estampadas", 
    price: "€8.00",
    image: "https://picsum.photos/seed/mug-mockup-white/800/1000",
  },
  { 
    id: "4", 
    name: "Tote Bags de Tela", 
    price: "€10.00",
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
        {/* Hero Section */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 py-2 md:py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-12 lg:mb-16">
            <div className="lg:col-span-12 flex flex-col items-center text-center">
              <div className="w-full mb-12 pt-2 lg:pt-4">
                <h1 className="text-[2.75rem] sm:text-[4.5rem] lg:text-[100px] font-bold tracking-tighter leading-[0.9] mb-6 lg:mb-8 mx-auto max-w-[1000px]">
                  Transformamos ideas en productos con propósito.
                </h1>
                <p className="text-base sm:text-xl text-gray-500 leading-relaxed max-w-[850px] mx-auto">
                  Taller de estampado y personalización en Madrid. Especialistas en textiles y artículos para proyectos con identidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories / Services CTA */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 py-16 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Nuestros Servicios</h2>
              <p className="text-gray-500 mt-2">Soluciones profesionales para cada necesidad.</p>
            </div>
            <Link href="/servicios" className="group flex items-center gap-2 font-bold hover:underline">
              Ver todos los servicios <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              date="Servicio 01"
              title="Iglesias y Ministerios"
              description="Camisetas y sudaderas para congresos, retiros espirituales y campamentos."
              initialBgImage="https://picsum.photos/seed/church-youth-camp/800/1200"
            />
            <FeatureCard
              date="Servicio 02"
              title="Empresas y Marcas"
              description="Uniformes, merchandising y tazas personalizadas para tu negocio."
              initialBgImage="https://picsum.photos/seed/business-merch/800/1200"
            />
          </div>
        </section>

        {/* About Us CTA */}
        <section className="bg-black text-white py-24 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-8">
                  Diseño con Identidad.
                </h2>
                <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                  En KAIA creemos que cada diseño debe comunicar un mensaje. Somos un taller cercano que cuida cada detalle de la producción.
                </p>
                <Link href="/nosotros" className="inline-block border border-white px-8 py-4 font-bold hover:bg-white hover:text-black transition-colors">
                  Conoce nuestra historia
                </Link>
              </div>
              <div className="relative aspect-square grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                  src="https://picsum.photos/seed/kaia-team/1000/1000"
                  alt="KAIA Workshop"
                  fill
                  className="object-cover rounded-sm"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* Store CTA & Countdown */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">La Tienda</h2>
            <p className="text-gray-500 mb-10 max-w-md mx-auto">Explora nuestra colección de productos listos para ti o inspírate para tu próximo pedido.</p>
            <Link href="/tienda" className="bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors inline-block mb-16">
              Ir a la Tienda
            </Link>

            <div className="pt-16 border-t border-gray-100">
              <h3 className="text-2xl font-bold mb-6 italic text-gray-400 uppercase tracking-widest">Próxima Colección</h3>
              <Countdown />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mt-16">
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
