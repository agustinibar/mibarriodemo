"use client";

import { useState } from "react";
import { crearReclamo } from "@/Firebase/Handlers/ProblematicasHandler";
import { Problematica } from "@/interfaces/IProblemas";

type Props = {
  onClose: () => void;
};

export default function ProblematicaFormulario({ onClose }: Props) {
  const [formulario, setFormulario] = useState<Problematica>({
    titulo: "",
    descripcion: "",
    barrio: "",
    vecino: "",
  });
  const [cargando, setCargando] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormulario(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setCargando(true);
    try {
      await crearReclamo(formulario);
      alert("✅ Problemática registrada con éxito.");
      onClose();
    } catch (err) {
      alert("❌ Error al registrar la problemática.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg relative">
        <h3 className="text-xl font-bold mb-4">Nueva problemática</h3>
        <input
          type="text"
          name="titulo"
          value={formulario.titulo}
          onChange={handleChange}
          placeholder="Título"
          className="w-full border rounded p-2 mb-3"
        />
        <textarea
          name="descripcion"
          value={formulario.descripcion}
          onChange={handleChange}
          placeholder="Descripción"
          className="w-full border rounded p-2 mb-3"
          rows={4}
        />
        <input
          type="text"
          name="barrio"
          value={formulario.barrio}
          onChange={handleChange}
          placeholder="Barrio"
          className="w-full border rounded p-2 mb-3"
        />
        <input
          type="text"
          name="vecino"
          value={formulario.vecino}
          onChange={handleChange}
          placeholder="Tu nombre (opcional)"
          className="w-full border rounded p-2 mb-4"
        />

        <div className="flex justify-between">
          <button
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handleSubmit}
            disabled={cargando}
          >
            {cargando ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </div>
    </div>
  );
}
