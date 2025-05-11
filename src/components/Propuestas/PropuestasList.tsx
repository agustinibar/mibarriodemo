// components/Propuestas/PropuestasList.tsx

"use client";

import { Propuesta, propuestas } from "@/utils/propuestas";

type Props = {
  onSelect: (propuesta: Propuesta) => void;
};

export default function PropuestasList({ onSelect } : Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {propuestas.map((propuesta) => (
        <div
          key={propuesta.id}
          className="bg-white rounded-xl p-5 shadow hover:shadow-md transition-all"
          onClick={()=> onSelect(propuesta)}
        >
          <div className="flex justify-between items-center mb-1">
            <h3 className="text-lg font-bold">{propuesta.titulo}</h3>
            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded">
              {propuesta.nivel}
            </span>
          </div>
          <p className="text-sm text-gray-500">{propuesta.fecha} · {propuesta.eje}</p>
          <p className="mt-2 text-gray-700">{propuesta.descripcion}</p>
          <p className="text-sm text-gray-600 mt-2 italic">Propuesta por: {propuesta.autor}</p>
        </div>
      ))}
    </div>
  );
}
