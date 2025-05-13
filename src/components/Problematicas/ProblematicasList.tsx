// components/Problemas/ProblemasList.tsx

"use client";

import { crearReclamo, obtenerReclamos } from "@/Firebase/Handlers/ProblematicasHandler";
import { Problema, Problematica } from "@/interfaces/IProblemas";
import { useEffect, useState } from "react";
import ProblematicaFormulario from "./ProblematicaFormulario";

type Props = {
  onSelect: (problema: Problema) => void;
};

export default function ProblemasList({ onSelect } : Props) {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [formulario, setFormulario] = useState<Problematica>({
    titulo: "",
    descripcion: "",
    barrio: "",
    vecino: "",
  });
  const [cargando, setCargando] = useState(false);
  const [problemas, setProblemas] = useState<Problema[]>([]);

   useEffect(() => {
       const unsuscribir = obtenerReclamos((data) => {
      setProblemas(data);
    });
    return () => unsuscribir(); // cleanup al desmontar
  }, []);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormulario(prev => ({ ...prev, [name]: value }));
  };

    const handleSubmit = async () => {
    setCargando(true);
    try {
      await crearReclamo(formulario);
      alert("✅ Problemática registrada con éxito.");
      setFormulario({ titulo: "", descripcion: "", barrio: "", vecino: "" });
      setMostrarFormulario(false);
    } catch (err) {
      alert("❌ Error al registrar la problemática.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div>
      <div className="mt-8 mb-8 flex justify-center">
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          onClick={() => setMostrarFormulario(true)}
        >
          📝 ¡Avisanos de las problemáticas de tu barrio!
        </button>
      </div>
       {mostrarFormulario && (
        <ProblematicaFormulario onClose={() => setMostrarFormulario(false)} />
      )}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {problemas.map((problema) => (
        <div
          key={problema.id}
          className="bg-white rounded-xl p-5 shadow hover:shadow-md transition-all"
          onClick={() => onSelect(problema)}
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold">{problema.titulo}</h3>
            <span
              className={`text-sm px-2 py-1 rounded ${
                problema.estado === "resuelto"
                  ? "bg-green-100 text-green-600"
                  : problema.estado === "en_proceso"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {problema.estado.replace("_", " ").toUpperCase()}
            </span>
          </div>
          <p className="text-sm text-gray-500">
          {problema.barrio} – {problema.fecha}
          </p>
          <p className="mt-2 text-gray-700">{problema.descripcion}</p>
          {problema.vecino && (
            <p className="text-sm text-gray-600 mt-1 italic">Reportado por: {problema.vecino}</p>
          )}
          {problema.acciones && (
            <ul className="mt-3 list-disc list-inside text-gray-600">
              {problema.acciones.map((accion, i) => (
                <li key={i}>{accion}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  </div>  
  );
}
