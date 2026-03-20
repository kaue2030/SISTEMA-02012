"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { HamburgerMenu } from "@/components/ui/hamburger-menu";
import { Heart, Star, StarHalf, Minus, Plus } from "lucide-react";

const productsData = [
  { 
    id: "1", 
    name: "Camisetas Personalizadas", 
    price: "€15.00", 
    originalPrice: "€20.00", 
    discount: "-25%", 
    image: "https://picsum.photos/seed/tshirt-mockup-white/800/1000",
    description: "Camisetas de alta calidad, disponibles en diferentes tallas y colores. Perfectas para estampar tu logo, diseño o mensaje en el frente, espalda o ambos. Ideales para eventos, retiros o merchandising."
  },
  { 
    id: "2", 
    name: "Sudaderas para Grupos", 
    price: "€25.00", 
    image: "https://picsum.photos/seed/hoodie-mockup-black/800/1000",
    description: "Sudaderas cómodas y abrigadas, ideales para grupos, equipos y temporadas de frío. Personalízalas con el diseño de tu congreso, iglesia o marca. Disponibles con o sin capucha."
  },
  { 
    id: "3", 
    name: "Tazas Estampadas", 
    price: "€8.00", 
    image: "https://picsum.photos/seed/mug-mockup-white/800/1000",
    description: "Tazas de cerámica blancas de alta resistencia, listas para estampar diseños a todo color. Un regalo perfecto y un excelente artículo promocional para tu marca o evento."
  },
  { 
    id: "4", 
    name: "Tote Bags de Tela", 
    price: "€10.00", 
    image: "https://picsum.photos/seed/totebag-mockup-canvas/800/1000",
    description: "Bolsas de tela (Tote Bags) resistentes y ecológicas. Perfectas para entregar materiales en congresos, eventos o como merchandising de tu marca personal. Amplia área de impresión."
  },
  { 
    id: "5", 
    name: "Sudadera Ilustrada KAIA", 
    price: "€35.00", 
    originalPrice: "€45.00", 
    discount: "-22%", 
    image: "https://picsum.photos/seed/sudadera-ilustrada/800/1000",
    description: "Sudadera de nuestra colección original KAIA. Diseño exclusivo que comunica identidad y propósito, fabricada con materiales premium para máxima comodidad."
  },
  { 
    id: "6", 
    name: "Crewneck Básico", 
    price: "€22.00", 
    image: "https://picsum.photos/seed/crewneck-logo/800/1000",
    description: "Sudadera cuello redondo clásica, perfecta para un look casual. Personalizable con bordado o estampado de alta durabilidad."
  },
  { 
    id: "7", 
    name: "Gorras Bordadas", 
    price: "€12.00", 
    image: "https://picsum.photos/seed/cap-mockup/800/1000",
    description: "Gorras de alta calidad con bordado personalizado. Ideales para uniformes, eventos al aire libre o como complemento de tu marca."
  },
  { 
    id: "8", 
    name: "Lanyards Personalizados", 
    price: "€3.00", 
    image: "https://picsum.photos/seed/lanyard/800/1000",
    description: "Cintas para acreditaciones (lanyards) impresas a todo color. Indispensables para congresos, ferias y eventos corporativos."
  },
];

const reviews = [
  { id: 1, name: "Sarah M.", date: "Dec 10, 2024", rating: 5, text: "Absolutely love this product! The quality exceeded my expectations and it arrived quickly. Would definitely purchase again." },
  { id: 2, name: "James R.", date: "Dec 8, 2024", rating: 5, text: "Perfect! Exactly what I was looking for. Great value for the price." },
  { id: 3, name: "Emily K.", date: "Dec 5, 2024", rating: 4, text: "Very good quality overall. Took off one star because shipping took a bit longer than expected, but the product itself is excellent." },
  { id: 4, name: "Michael T.", date: "Dec 2, 2024", rating: 5, text: "This is my third time ordering. Consistently great quality and customer service is responsive when I have questions." },
  { id: 5, name: "Lisa P.", date: "Nov 28, 2024", rating: 4, text: "Nice product, works as described. Would recommend to friends and family." },
  { id: 6, name: "David W.", date: "Nov 25, 2024", rating: 5, text: "Wow! The attention to detail is impressive. You can tell this was made with care." },
];

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;
  const product = productsData.find(p => p.id === productId) || productsData[0];

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Blue");

  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = [
    { name: "Blue", class: "bg-blue-600" },
    { name: "Black", class: "bg-black" },
    { name: "Red", class: "bg-red-600" }
  ];

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
        {/* Product Detail Section */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Left: Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative w-full aspect-[3/4] bg-gray-100 rounded-sm overflow-hidden">
                <Image src={product.image} alt={product.name} fill className="object-cover" unoptimized />
              </div>
              <div className="relative w-full aspect-[3/4] bg-gray-100 rounded-sm overflow-hidden">
                <Image src={`${product.image}?var=2`} alt={`${product.name} detail`} fill className="object-cover" unoptimized />
              </div>
            </div>

            {/* Right: Details */}
            <div className="flex flex-col pt-4">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">{product.name}</h1>
              <div className="flex items-center gap-3 mb-8">
                <p className="text-xl text-gray-900 font-bold">{product.price}</p>
                {product.originalPrice && (
                  <p className="text-lg text-gray-500 line-through">{product.originalPrice}</p>
                )}
                {product.discount && (
                  <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-sm">
                    {product.discount}
                  </span>
                )}
              </div>

              {/* Color Selection */}
              <div className="mb-8">
                <p className="text-sm font-medium mb-3">Color: {selectedColor}</p>
                <div className="flex gap-3">
                  {colors.map((color) => (
                    <button 
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-8 h-8 rounded-sm border-2 ${selectedColor === color.name ? 'border-black' : 'border-transparent'} p-0.5 transition-all`}
                    >
                      <div className={`w-full h-full rounded-sm ${color.class}`}></div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-sm font-medium">Size</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {sizes.map((size) => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 text-sm font-medium rounded-sm border transition-colors ${
                        selectedSize === size 
                          ? 'bg-black text-white border-black' 
                          : 'bg-white text-black border-gray-200 hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center justify-between border border-gray-200 rounded-sm px-4 py-3 sm:w-32">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-gray-500 hover:text-black">
                    <Minus size={16} />
                  </button>
                  <span className="text-sm font-medium">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="text-gray-500 hover:text-black">
                    <Plus size={16} />
                  </button>
                </div>
                
                <div className="flex flex-1 gap-4">
                  <button className="flex-1 bg-gray-100 text-black font-medium py-3 rounded-sm hover:bg-gray-200 transition-colors">
                    Add to cart
                  </button>
                  <button className="flex-1 bg-black text-white font-medium py-3 rounded-sm hover:bg-gray-800 transition-colors">
                    Buy it now
                  </button>
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-sm text-gray-500 max-w-none">
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="max-w-[1000px] mx-auto px-4 sm:px-6 py-16 md:py-24 border-t border-gray-100">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-16 items-center md:items-start p-8 border border-gray-100 rounded-xl shadow-sm">
            <div className="text-center md:text-left">
              <h2 className="text-6xl font-bold tracking-tighter mb-2">4.7</h2>
              <div className="flex items-center justify-center md:justify-start gap-1 text-black mb-2">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <StarHalf size={20} fill="currentColor" />
              </div>
              <p className="text-sm text-gray-500">6 reviews</p>
            </div>
            
            <div className="flex-1 w-full max-w-md">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-4 mb-2">
                  <span className="text-sm font-medium w-8 flex items-center gap-1">{star} <Star size={12} fill="currentColor" /></span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-black rounded-full" 
                      style={{ width: star === 5 ? '70%' : star === 4 ? '30%' : '0%' }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500 w-4 text-right">
                    {star === 5 ? '4' : star === 4 ? '2' : '0'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="border border-gray-100 p-6 rounded-xl shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-600">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{review.name}</h4>
                      <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex text-black">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} className={i >= review.rating ? "text-gray-300" : ""} />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Suggestions Section */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 py-16 md:py-24 border-t border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold">Suggestions just for you</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {productsData.slice(0, 4).map((prod) => (
              <div key={prod.id} className="relative group">
                <Link href={`/tienda/${prod.id}`} className="block">
                  <div className="relative w-full aspect-[4/5] bg-[#F5F5F5] mb-4 overflow-hidden rounded-sm">
                    <Image 
                      src={prod.image} 
                      alt={prod.name} 
                      fill 
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                      unoptimized 
                    />
                    {prod.discount && (
                      <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-sm">
                        {prod.discount}
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-1">{prod.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-sm font-bold ${prod.discount ? 'text-red-600' : 'text-gray-900'}`}>
                          {prod.price}
                        </span>
                        {prod.originalPrice && (
                          <span className="text-xs text-gray-500 line-through">
                            {prod.originalPrice}
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
