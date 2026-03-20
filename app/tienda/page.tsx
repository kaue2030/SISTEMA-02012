"use client";

import { HamburgerMenu } from "@/components/ui/hamburger-menu";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

const products = [
  { id: 1, name: "Camisetas Personalizadas", price: "€15.00", originalPrice: "€20.00", discount: "-25%", image: "https://picsum.photos/seed/tshirt-mockup-white/800/1000" },
  { id: 2, name: "Sudaderas para Grupos", price: "€25.00", image: "https://picsum.photos/seed/hoodie-mockup-black/800/1000" },
  { id: 3, name: "Tazas Estampadas", price: "€8.00", image: "https://picsum.photos/seed/mug-mockup-white/800/1000" },
  { id: 4, name: "Tote Bags de Tela", price: "€10.00", image: "https://picsum.photos/seed/totebag-mockup-canvas/800/1000" },
  { id: 5, name: "Sudadera Ilustrada KAIA", price: "€35.00", originalPrice: "€45.00", discount: "-22%", image: "https://picsum.photos/seed/sudadera-ilustrada/800/1000" },
  { id: 6, name: "Crewneck Básico", price: "€22.00", image: "https://picsum.photos/seed/crewneck-logo/800/1000" },
  { id: 7, name: "Gorras Bordadas", price: "€12.00", image: "https://picsum.photos/seed/cap-mockup/800/1000" },
  { id: 8, name: "Lanyards Personalizados", price: "€3.00", image: "https://picsum.photos/seed/lanyard/800/1000" },
];

export default function TiendaPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Navigation Menu */}
      <header className="w-full py-6 lg:py-8 absolute top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
            KAIA.
          </Link>
          <HamburgerMenu />
        </div>
      </header>

      <main className="w-full pb-24">
        {/* Split Hero Section */}
        <section className="w-full grid grid-cols-1 md:grid-cols-2 min-h-[80vh] md:min-h-screen pt-24 md:pt-0">
          {/* Left Banner */}
          <div className="relative w-full h-[50vh] md:h-full bg-gray-100 flex items-center justify-center overflow-hidden group">
            <Image 
              src="https://picsum.photos/seed/effortless-style/1200/1600" 
              alt="Effortless Style" 
              fill 
              className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-1/4 left-8 md:left-16 z-10">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2 text-black">Estilo con<br/>Propósito</h2>
              <p className="text-lg md:text-xl text-black">Hasta 50% de descuento</p>
            </div>
            <button className="absolute bottom-8 right-8 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors z-10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            </button>
          </div>

          {/* Right Banner */}
          <div className="relative w-full h-[50vh] md:h-full bg-gray-200 flex items-center justify-center overflow-hidden group">
            <Image 
              src="https://picsum.photos/seed/everyday-essentials/1200/1600" 
              alt="Everyday Essentials" 
              fill 
              className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-center z-10 w-full px-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2 text-black">Esenciales Diarios</h2>
              <p className="text-lg text-black mb-6">Hasta 50% de descuento</p>
              <button className="bg-black text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors">
                Ver Más
              </button>
            </div>
            <button className="absolute bottom-8 right-8 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors z-10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            </button>
          </div>
        </section>

        {/* Product Grid */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold">Sugerencias para ti</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {products.map((product) => (
              <div key={product.id} className="relative group">
                <Link href={`/tienda/${product.id}`} className="block">
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
                  </div>
                </Link>
                <div className="absolute bottom-1 right-1 p-2 text-gray-400 hover:text-red-500 transition-colors cursor-pointer z-10">
                  <Heart size={18} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
