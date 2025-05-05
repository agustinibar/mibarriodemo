"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  BarChart3,
  MessageCircle,
  FileText,
  Lightbulb,
  AlertTriangle,
  LogOut,
} from "lucide-react";
import { logOut } from "@/Firebase/Handlers/AuthHandler";
import BlogList from "@/components/Blogs/BlogList";

export default function Dashboard() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("inicio");

  const handleLogout = async () => {
   try{
    await logOut();
   }catch (error){
    alert("Hubo un error al cerrar seiO se")
   }
    router.push("/login");
  };

  const renderContent = () => {
    switch (activeSection) {
      case "problemas":
        return <div>🛠️ Aquí podrás ver y seguir tus problemáticas o reclamos.</div>;
      case "propuestas":
        return <div>📌 Visualiza las propuestas del candidato.</div>;
      case "comunicacion":
        return <div>🤝 Registro de visitas, mensajes y contacto con vecinos.</div>;
      case "reportes":
        return <div>📊 Información clave sobre barrios, reclamos y más.</div>;
      default:
        return (
          <div>
            <h2 className="text-2xl font-semibold">Bienvenido a MiBarrioApp 👋</h2>
            <p className="mt-2 text-gray-700">
              <BlogList/>
            </p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-md p-4">
        <h1 className="text-xl font-bold text-blue-600 mb-6">MiBarrioApp</h1>
        <nav className="space-y-4">
          <button
            onClick={() => setActiveSection("inicio")}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
          >
            <BarChart3 size={20} /> Inicio
          </button>
          <button
            onClick={() => setActiveSection("problemas")}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
          >
            <AlertTriangle size={20} /> Problemáticas
          </button>
          <button
            onClick={() => setActiveSection("propuestas")}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
          >
            <Lightbulb size={20} /> Propuestas
          </button>
          <button
            onClick={() => setActiveSection("comunicacion")}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
          >
            <MessageCircle size={20} /> Comunicación
          </button>
          <button
            onClick={() => setActiveSection("reportes")}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
          >
            <FileText size={20} /> Reportes
          </button>
        </nav>
        <button
          onClick={handleLogout}
          className="mt-10 flex items-center gap-2 text-red-500 hover:text-red-700"
        >
          <LogOut size={20} /> Cerrar sesión
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {renderContent()}
      </main>
    </div>
  );
}
