"use client";

import { useState } from "react";
import { reportes } from "@/utils/reporte";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import CandidatoFormulario from "@/components/Candidatos/CandidatosFormulario";
import PropuestaFormulario from "@/components/Propuestas/PropuestasFormulario";

export default function ListaDeReportes() {
  const [mostrarFormularioCandidato, setMostrarFormularioCandidato] = useState(false);
  const [mostrarFormularioPropuesta, setMostrarFormularioPropuesta] = useState(false);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-blue-700">📊 Reportes del sistema</h2>

      {/* BOTONES DE CARGA */}
      <div className="flex justify-end gap-4 mb-6">
        <button
          onClick={() => setMostrarFormularioCandidato(true)}
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
        >
          ➕ Cargar Candidato
        </button>
        <button
          onClick={() => setMostrarFormularioPropuesta(true)}
          className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition"
        >
          📜 Cargar Propuesta
        </button>
      </div>

      {/* LISTA DE REPORTES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reportes.map((reporte) => (
          <div
            key={reporte.id}
            className="bg-white p-4 rounded-xl shadow border hover:shadow-lg transition-all"
          >
            <h3 className="text-lg font-bold">{reporte.titulo}</h3>
            <p className="text-sm text-gray-600">
              {reporte.tipo} ·{" "}
              {format(new Date(reporte.fecha), "PPP", { locale: es })}
            </p>
            <p className="mt-2 text-gray-700">{reporte.descripcion}</p>
          </div>
        ))}
      </div>

      {/* MODAL: CANDIDATO */}
      {mostrarFormularioCandidato && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-4 relative">
            <button
              onClick={() => setMostrarFormularioCandidato(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
            >
              ×
            </button>
            <CandidatoFormulario onClose={() => setMostrarFormularioCandidato(false)} />
          </div>
        </div>
      )}

      {/* MODAL: PROPUESTA */}
      {mostrarFormularioPropuesta && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-4 relative">
            <button
              onClick={() => setMostrarFormularioPropuesta(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
            >
              ×
            </button>
            <PropuestaFormulario onClose={() => setMostrarFormularioPropuesta(false)} />
          </div>
        </div>
      )}
    </div>
  );
}