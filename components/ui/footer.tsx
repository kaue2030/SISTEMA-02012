import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, ChevronDown } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Contact Us */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6">Contáctanos</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>Atención al Cliente: Lun-Vie, 9am-6pm.</li>
              <li>Llámanos: <a href="tel:+34910000000" className="underline hover:text-black">+34 910 000 000</a></li>
              <li>Email: <a href="mailto:hola@kaia.es" className="underline hover:text-black">hola@kaia.es</a></li>
              <li>Dirección: Calle del Estampado 12, 28001 Madrid, España</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"><Facebook size={16} /></a>
              <a href="#" className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"><Twitter size={16} /></a>
              <a href="#" className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"><Instagram size={16} /></a>
            </div>
          </div>

          {/* Shop */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 flex items-center justify-between">Tienda <ChevronDown size={16} className="lg:hidden" /></h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link href="/tienda" className="underline hover:text-black">Novedades</Link></li>
              <li><Link href="/tienda" className="underline hover:text-black">Más Vendidos</Link></li>
              <li><Link href="/tienda" className="underline hover:text-black">Colecciones</Link></li>
              <li><Link href="/tienda" className="underline hover:text-black">Regalos</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 flex items-center justify-between">Soporte <ChevronDown size={16} className="lg:hidden" /></h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link href="/contacto" className="underline hover:text-black">Contáctanos</Link></li>
              <li><Link href="/contacto" className="underline hover:text-black">FAQs</Link></li>
              <li><Link href="/contacto" className="underline hover:text-black">Seguimiento</Link></li>
              <li><Link href="/contacto" className="underline hover:text-black">Devoluciones</Link></li>
            </ul>
          </div>

          {/* About */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 flex items-center justify-between">KAIA <ChevronDown size={16} className="lg:hidden" /></h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link href="/nosotros" className="underline hover:text-black">Nuestra Historia</Link></li>
              <li><Link href="/servicios" className="underline hover:text-black">Servicios</Link></li>
              <li><Link href="/nosotros" className="underline hover:text-black">Sostenibilidad</Link></li>
              <li><Link href="/contacto" className="underline hover:text-black">Prensa</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6">Donde la creatividad se une a la calidad</h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Diseñamos productos que permiten a marcas, iglesias y personas expresar su identidad a través de estampados de alta calidad.
            </p>
            <form className="flex flex-col gap-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input 
                  type="email" 
                  placeholder="Tu email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <button type="submit" className="self-start px-6 py-2 bg-gray-100 text-black font-medium rounded-md hover:bg-gray-200 transition-colors">
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200 gap-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <select className="appearance-none bg-transparent border border-gray-300 rounded-md pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black">
                <option>Español</option>
                <option>English</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
            </div>
          </div>

          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <div className="w-6 h-6 bg-black text-white flex items-center justify-center rounded-sm text-xs">K</div>
            KAIA.
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 mr-2">Métodos de Pago</span>
            {/* Mock payment icons */}
            <div className="flex gap-1">
              <div className="w-8 h-5 bg-gray-200 rounded-sm"></div>
              <div className="w-8 h-5 bg-gray-200 rounded-sm"></div>
              <div className="w-8 h-5 bg-gray-200 rounded-sm"></div>
              <div className="w-8 h-5 bg-gray-200 rounded-sm"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-6 mt-6 border-t border-gray-100 text-xs text-gray-500">
          <p>© 2025 Hecho con ❤️ por KAIA</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/contacto" className="hover:text-black">Política de Devoluciones</Link>
            <Link href="/contacto" className="hover:text-black">Términos de Servicio</Link>
            <Link href="/contacto" className="hover:text-black">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
