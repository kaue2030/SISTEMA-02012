"use client";

import { HamburgerMenu } from "@/components/ui/hamburger-menu";
import Link from "next/link";

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
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">Nosotros</h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Somos un taller de estampado dedicado a transformar ideas en productos con propósito. 
          Pronto podrás editar esta información desde tu panel de administrador.
        </p>
      </main>
    </div>
  );
}
