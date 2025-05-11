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
import ProblemasList from "@/components/Problematicas/ProblematicasList";
import PropuestasList from "@/components/Propuestas/PropuestasList";
import ListaDeContactos from "@/components/Comunicacion/ComunicacionList";
import ListaDeReportes from "@/components/Reportes/ReportesList";
import ProblematicaDetail from "@/components/Problematicas/ProblematicaDetail";
import PropuestaDetail from "@/components/Propuestas/PropuestaDetail";
import ContactoDetail from "@/components/Comunicacion/ContactoDetail";

export default function Dashboard() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("inicio");
  const [selectedProblematica, setSelectedProblematica] = useState(null);
  const [selectedPropuesta, setSelectedPropuesta] = useState(null);
  const [selectedContacto, setSelectedContacto] = useState(null);

  const handleLogout = async () => {
    try {
      await logOut();
      router.push("/login");
    } catch (error) {
      alert("Hubo un error al cerrar sesión");
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case "problemas":
        return selectedProblematica ? (
          <ProblematicaDetail
            problema={selectedProblematica}
            onBack={() => setSelectedProblematica(null)}
          />
        ) : (
          <ProblemasList onSelect={setSelectedProblematica} />
        );
      case "propuestas":
        return selectedPropuesta ? (
          <PropuestaDetail
            propuesta={selectedPropuesta}
            onBack={() => setSelectedPropuesta(null)}
          />
        ) : (
          <PropuestasList onSelect={setSelectedPropuesta} />
        );
      case "comunicacion":
        return selectedContacto ? (
          <ContactoDetail
            contacto={selectedContacto}
            onBack={() => setSelectedContacto(null)}
          />
        ) : (
          <ListaDeContactos onSelect={setSelectedContacto} />
        );
      case "reportes":
        return <div><ListaDeReportes/></div>;
      default:
        return (
          <div>
            <h2 className="text-2xl font-semibold">Bienvenido a MiBarrioApp 👋</h2>
            <div className="mt-4">
              <BlogList />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-md p-4 h-screen sticky top-0">
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

      {/* Main Content (scrollable) */}
      <main className="flex-1 overflow-y-auto max-h-screen p-8">
        {renderContent()}
      </main>
    </div>
  );
}
