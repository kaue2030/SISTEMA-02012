"use client";

import { HamburgerMenu } from "@/components/ui/hamburger-menu";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactoPage() {
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
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">Contacto</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-xl text-gray-600 mb-12">
              ¿Tienes un proyecto en mente? Estamos aquí para ayudarte a hacerlo realidad. Cuéntanos qué necesitas y te responderemos lo antes posible.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-bold">hola@kaia.es</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Teléfono</p>
                  <p className="font-bold">+34 910 000 000</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Taller</p>
                  <p className="font-bold">Calle del Estampado 12, Madrid</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6 bg-gray-50 p-8 rounded-2xl" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Nombre</label>
                <input type="text" className="w-full bg-white border-b border-gray-200 py-3 px-0 focus:border-black outline-none transition-colors" placeholder="Tu nombre" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Email</label>
                <input type="email" className="w-full bg-white border-b border-gray-200 py-3 px-0 focus:border-black outline-none transition-colors" placeholder="tu@email.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Mensaje</label>
              <textarea rows={4} className="w-full bg-white border-b border-gray-200 py-3 px-0 focus:border-black outline-none transition-colors resize-none" placeholder="¿En qué podemos ayudarte?"></textarea>
            </div>
            <button className="w-full bg-black text-white font-bold py-4 rounded-full hover:bg-gray-800 transition-colors uppercase tracking-widest text-sm">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
