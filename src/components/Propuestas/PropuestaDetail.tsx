"use client";

import { Propuesta } from "@/utils/propuestas";

type Props = {
  propuesta: Propuesta;
  onBack: () => void;
};

export default function PropuestaDetail({ propuesta, onBack }: Props) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <button
        onClick={onBack}
        className="text-blue-500 hover:underline mb-4"
      >
        ← Volver a las propuestas
      </button>
      <h2 className="text-2xl font-bold text-blue-700">{propuesta.titulo}</h2>
      <p className="text-sm text-gray-500 mb-2">Nivel: {propuesta.nivel}</p>
      <p className="mb-4">{propuesta.descripcion}</p>
      <div className="bg-gray-100 p-4 rounded">
        <h3 className="font-semibold mb-1">{propuesta.autor}</h3>
      </div>
    </div>
  );
}