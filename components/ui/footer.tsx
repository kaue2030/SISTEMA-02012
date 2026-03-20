import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, ChevronDown } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Contact Us */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6">Contact us</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>Customer Support: Mon-Fri, 8am-7pm EST.</li>
              <li>Call Us: <a href="tel:+18559874420" className="underline hover:text-black">+1 855-987-4420 (toll-free)</a></li>
              <li>Email Us: <a href="mailto:support@kaia.es" className="underline hover:text-black">support@kaia.es</a></li>
              <li>Address: 125 Bloom Avenue, Suite 210, CA</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"><Facebook size={16} /></a>
              <a href="#" className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"><Twitter size={16} /></a>
              <a href="#" className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"><Instagram size={16} /></a>
            </div>
          </div>

          {/* Shop */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 flex items-center justify-between">Shop <ChevronDown size={16} className="lg:hidden" /></h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link href="#" className="underline hover:text-black">New Launches</Link></li>
              <li><Link href="#" className="underline hover:text-black">Best Sellers</Link></li>
              <li><Link href="#" className="underline hover:text-black">Skin Type Routines</Link></li>
              <li><Link href="#" className="underline hover:text-black">Gifts & Sets</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 flex items-center justify-between">Support <ChevronDown size={16} className="lg:hidden" /></h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link href="#" className="underline hover:text-black">Contact Us</Link></li>
              <li><Link href="#" className="underline hover:text-black">FAQs</Link></li>
              <li><Link href="#" className="underline hover:text-black">Order Tracking</Link></li>
              <li><Link href="#" className="underline hover:text-black">Returns & Exchanges</Link></li>
            </ul>
          </div>

          {/* About */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 flex items-center justify-between">About <ChevronDown size={16} className="lg:hidden" /></h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link href="#" className="underline hover:text-black">Our Story</Link></li>
              <li><Link href="#" className="underline hover:text-black">Ingredients</Link></li>
              <li><Link href="#" className="underline hover:text-black">Sustainability</Link></li>
              <li><Link href="#" className="underline hover:text-black">Press</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6">Where Modern Fashion Meets Comfort</h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              We design clothing that empowers women to express their individuality through thoughtful details, flattering fits, and beautifully crafted essentials.
            </p>
            <form className="flex flex-col gap-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <button type="submit" className="self-start px-6 py-2 bg-gray-100 text-black font-medium rounded-md hover:bg-gray-200 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200 gap-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <select className="appearance-none bg-transparent border border-gray-300 rounded-md pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black">
                <option>Language</option>
                <option>English</option>
                <option>Español</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
            </div>
          </div>

          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <div className="w-6 h-6 bg-black text-white flex items-center justify-center rounded-sm text-xs">K</div>
            KAIA.
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 mr-2">Payment Methods</span>
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
          <p>© 2026 Made with ❤️ by KAIA</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-black">Returns Policy</Link>
            <Link href="#" className="hover:text-black">Terms Of Service</Link>
            <Link href="#" className="hover:text-black">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
