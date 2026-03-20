"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/admin");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <Link href="/" className="text-4xl font-bold tracking-tighter mb-12 hover:opacity-70 transition-opacity">
        KAIA.
      </Link>

      <div className="w-full max-w-md bg-white border border-gray-100 p-8 sm:p-12 rounded-xl shadow-sm">
        <h1 className="text-3xl font-bold tracking-tighter mb-4 text-center">Bienvenido</h1>
        <p className="text-gray-500 mb-8 text-center">Accede al panel para gestionar el contenido de tu taller.</p>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="tu@email.com"
                required
                className="w-full bg-gray-50 border-none px-12 py-4 rounded-lg focus:ring-2 focus:ring-black outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                required
                className="w-full bg-gray-50 border-none px-12 py-4 rounded-lg focus:ring-2 focus:ring-black outline-none transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 group hover:bg-gray-800 transition-colors"
          >
            Iniciar Sesión <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-50 text-center">
          <p className="text-sm text-gray-400">¿Problemas para entrar? Contacta a soporte técnico.</p>
        </div>
      </div>
    </div>
  );
}
