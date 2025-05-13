// components/Reportes/ListaDeReportes.tsx

"use client";

import { reportes } from "@/utils/reporte";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export default function ListaDeReportes() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-blue-700">📊 Reportes del sistema</h2>
      <div className="flex justify-end gap-4 mb-6">
          <button
            onClick={() => alert("Formulario de carga de candidato")}
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
          >
            ➕ Cargar Candidato
          </button>
          <button
            onClick={() => alert("Formulario de carga de propuesta")}
            className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition"
          >
            📜 Cargar Propuesta
          </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reportes.map((reporte) => (
          <div
            key={reporte.id}
            className="bg-white p-4 rounded-xl shadow border hover:shadow-lg transition-all"
          >
            <h3 className="text-lg font-bold">{reporte.titulo}</h3>
            <p className="text-sm text-gray-600">{reporte.tipo} · {format(new Date(reporte.fecha), "PPP", { locale: es })}</p>
            <p className="mt-2 text-gray-700">{reporte.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
