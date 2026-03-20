"use client";

import { HamburgerMenu } from "@/components/ui/hamburger-menu";
import Link from "next/link";

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
        <p className="text-xl text-gray-600 max-w-2xl mb-12">
          Ofrecemos soluciones de estampado para iglesias, empresas y marcas.
          Pronto podrás editar esta información y vincular páginas desde tu panel de administrador.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-gray-200 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Iglesias</h3>
            <p className="text-gray-600">Uniformes, retiros y eventos especiales.</p>
          </div>
          <div className="p-8 border border-gray-200 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Empresas</h3>
            <p className="text-gray-600">Merchandising corporativo y uniformes de trabajo.</p>
          </div>
          <div className="p-8 border border-gray-200 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Marcas</h3>
            <p className="text-gray-600">Producción de líneas de ropa y accesorios.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
