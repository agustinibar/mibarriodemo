// components/Reportes/ListaDeReportes.tsx

"use client";

import { reportes } from "@/utils/reporte";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export default function ListaDeReportes() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-blue-700">📊 Reportes del sistema</h2>
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
