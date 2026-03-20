"use client";

import { useState, useEffect, useCallback } from "react";
import {
  LayoutDashboard,
  FileText,
  ShoppingBag,
  Settings,
  LogOut,
  Plus,
  Search,
  MoreVertical,
  Image as ImageIcon,
  Edit3,
  Trash2,
  Save,
  X,
  Menu,
  CheckCircle2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("nosotros");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [saveStatus, setSaveStatus] = useState(false);

  const [nosotrosContent, setNosotrosContent] = useState({
    history: "KAIA nació de una pasión por el diseño y la necesidad de ofrecer productos personalizados con un propósito claro. Empezamos en un pequeño taller en Madrid...",
    mission: "Empoderar a comunidades, iglesias y empresas a través de productos personalizados de alta calidad...",
    vision: "Convertirnos en el taller de referencia en España para proyectos creativos que buscan algo más que un simple estampado."
  });

  const [products, setProducts] = useState([
    { id: 1, name: "Camiseta Personalizada", price: "€15.00", image: "https://picsum.photos/seed/tshirt-mockup-white/100/100" },
    { id: 2, name: "Sudadera Grupo", price: "€25.00", image: "https://picsum.photos/seed/hoodie-mockup-black/100/100" },
    { id: 3, name: "Taza Estampada", price: "€8.00", image: "https://picsum.photos/seed/mug-mockup-white/100/100" }
  ]);

  // Use a timeout to avoid cascading render lint error
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("kaia_nosotros");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          const timer = setTimeout(() => {
            setNosotrosContent(parsed);
          }, 0);
          return () => clearTimeout(timer);
        } catch (e) {
          console.error("Error parsing saved content", e);
        }
      }
    }
  }, []);

  const handleSave = useCallback(() => {
    localStorage.setItem("kaia_nosotros", JSON.stringify(nosotrosContent));
    setSaveStatus(true);
    setTimeout(() => setSaveStatus(false), 3000);
  }, [nosotrosContent]);

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans selection:bg-black selection:text-white">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-100 transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0`}>
        <div className="h-full flex flex-col p-6">
          <div className="flex items-center justify-between mb-12">
            <Link href="/" className="text-2xl font-bold tracking-tighter">KAIA Admin.</Link>
            <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-gray-400 hover:text-black">
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 space-y-2">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold transition-all ${activeTab === 'dashboard' ? 'bg-black text-white' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              <LayoutDashboard size={18} /> Resumen
            </button>
            <button
              onClick={() => setActiveTab("nosotros")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold transition-all ${activeTab === 'nosotros' ? 'bg-black text-white' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              <FileText size={18} /> Modificar Nosotros
            </button>
            <button
              onClick={() => setActiveTab("tienda")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold transition-all ${activeTab === 'tienda' ? 'bg-black text-white' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              <ShoppingBag size={18} /> Modificar Tienda
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold text-gray-500 hover:bg-gray-100 transition-all mt-12">
              <Settings size={18} /> Configuración
            </button>
          </nav>

          <Link href="/login" className="flex items-center gap-3 px-4 py-3 text-red-500 text-sm font-bold hover:bg-red-50 transition-all rounded-lg mt-auto">
            <LogOut size={18} /> Cerrar Sesión
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-screen overflow-y-auto">
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 p-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 text-gray-500 hover:text-black hover:bg-gray-100 rounded-md">
              <Menu size={20} />
            </button>
            <h1 className="text-xl font-bold tracking-tighter uppercase">{activeTab === 'nosotros' ? 'Editar Quiénes Somos' : activeTab === 'tienda' ? 'Gestionar Productos' : 'Panel de Control'}</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input type="text" placeholder="Buscar..." className="bg-gray-50 border-none px-10 py-2 rounded-full text-sm outline-none focus:ring-1 focus:ring-black" />
            </div>
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold text-sm">K</div>
          </div>
        </header>

        <div className="p-6 md:p-10 max-w-[1000px] mx-auto">
          {activeTab === "nosotros" && (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold flex items-center gap-2 italic uppercase"><Edit3 size={18} /> Historia del Taller</h2>
                  <button
                    onClick={handleSave}
                    className={`text-sm font-bold px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${saveStatus ? 'bg-green-600 text-white' : 'bg-black text-white hover:bg-gray-800'}`}
                  >
                    {saveStatus ? <><CheckCircle2 size={16} /> Guardado</> : <><Save size={16} /> Guardar Cambios</>}
                  </button>
                </div>
                <textarea
                  className="w-full bg-gray-50 border-none rounded-xl p-6 text-gray-600 leading-relaxed outline-none focus:ring-2 focus:ring-black min-h-[200px]"
                  value={nosotrosContent.history}
                  onChange={(e) => setNosotrosContent({...nosotrosContent, history: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-4">
                  <h2 className="text-lg font-bold italic uppercase flex items-center gap-2"><Edit3 size={18} /> Misión</h2>
                  <textarea
                    className="w-full bg-gray-50 border-none rounded-xl p-4 text-gray-600 leading-relaxed outline-none focus:ring-2 focus:ring-black min-h-[150px]"
                    value={nosotrosContent.mission}
                    onChange={(e) => setNosotrosContent({...nosotrosContent, mission: e.target.value})}
                  />
                </div>
                <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-4">
                  <h2 className="text-lg font-bold italic uppercase flex items-center gap-2"><Edit3 size={18} /> Visión</h2>
                  <textarea
                    className="w-full bg-gray-50 border-none rounded-xl p-4 text-gray-600 leading-relaxed outline-none focus:ring-2 focus:ring-black min-h-[150px]"
                    value={nosotrosContent.vision}
                    onChange={(e) => setNosotrosContent({...nosotrosContent, vision: e.target.value})}
                  />
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                <h2 className="text-lg font-bold italic uppercase mb-6 flex items-center gap-2"><ImageIcon size={18} /> Foto de Cabecera</h2>
                <div className="relative aspect-video bg-gray-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-200 group cursor-pointer hover:border-black transition-colors overflow-hidden">
                  <Image src="https://picsum.photos/seed/workshop-vibe/1200/675" alt="Preview" fill className="object-cover opacity-50 group-hover:opacity-70 transition-opacity" />
                  <div className="relative z-10 flex flex-col items-center gap-2 bg-white/80 p-6 rounded-xl backdrop-blur-sm">
                    <ImageIcon size={32} className="text-gray-400" />
                    <p className="text-sm font-bold">Haz clic para cambiar imagen</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "tienda" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-lg font-bold flex items-center gap-2 uppercase italic">Inventario de Productos</h2>
                <button className="bg-black text-white px-6 py-3 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-lg shadow-black/10">
                  <Plus size={18} /> Nuevo Producto
                </button>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 text-gray-400 text-[10px] uppercase tracking-widest font-bold">
                    <tr>
                      <th className="px-6 py-4">Imagen</th>
                      <th className="px-6 py-4">Producto</th>
                      <th className="px-6 py-4">Precio</th>
                      <th className="px-6 py-4">Estado</th>
                      <th className="px-6 py-4 text-right">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {products.map((product) => (
                      <tr key={product.id} className="group hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="relative w-12 h-12 bg-gray-100 rounded-lg overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                            <Image src={product.image} alt={product.name} fill className="object-cover" />
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm font-bold text-gray-900">{product.name}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm font-medium text-gray-500">{product.price}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest">En Stock</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-2 text-gray-400 hover:text-black hover:bg-white rounded-lg transition-colors border border-transparent hover:border-gray-100 shadow-sm">
                              <Edit3 size={16} />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-gray-100 shadow-sm">
                              <Trash2 size={16} />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-black">
                              <MoreVertical size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "dashboard" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-black text-white p-8 rounded-xl shadow-xl shadow-black/10">
                <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Pedidos Totales</p>
                <h3 className="text-4xl font-bold tracking-tighter leading-none mb-6">128</h3>
                <div className="flex items-center gap-2 text-green-400 text-sm font-bold italic">
                  <span>+12% esta semana</span>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Usuarios Registrados</p>
                <h3 className="text-4xl font-bold tracking-tighter leading-none mb-6 text-gray-900">1,024</h3>
                <div className="flex items-center gap-2 text-green-500 text-sm font-bold italic">
                  <span>+4% esta semana</span>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Páginas Creadas</p>
                <h3 className="text-4xl font-bold tracking-tighter leading-none mb-6 text-gray-900">5</h3>
                <div className="flex items-center gap-2 text-gray-400 text-sm font-bold italic">
                  <span>Todo actualizado</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
