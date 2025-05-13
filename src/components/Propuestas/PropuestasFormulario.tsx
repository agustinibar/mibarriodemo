"use client";

import { useState } from "react";
import { crearPropuesta } from "@/Firebase/Handlers/PropuestasHandlers";
import { Propuesta } from "@/interfaces/IPropuesta";

type Props = {
  onClose: () => void;
};

export default function PropuestaFormulario({ onClose }: Props) {
  const [propuesta, setPropuesta] = useState<Omit<Propuesta, "id" | "fecha">>({
    titulo: "",
    descripcion: "",
    eje: "Educación",
    nivel: "Barrial",
    autor: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPropuesta((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      await crearPropuesta(propuesta);
      alert("✅ Propuesta registrada con éxito");
      onClose();
    } catch (err) {
      alert("❌ Error al registrar la propuesta");
      console.error(err);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-xl mx-auto mb-8">
      <h2 className="text-xl font-semibold mb-4">Registrar nueva propuesta</h2>
      <div className="grid grid-cols-1 gap-4">
        <input name="titulo" value={propuesta.titulo} onChange={handleChange} placeholder="Título" className="input" />
        <textarea name="descripcion" value={propuesta.descripcion} onChange={handleChange} placeholder="Descripción" className="input" rows={3} />
        <input name="autor" value={propuesta.autor} onChange={handleChange} placeholder="Autor" className="input" />
        <select name="eje" value={propuesta.eje} onChange={handleChange} className="input">
          <option value="Seguridad">Seguridad</option>
          <option value="Educación">Educación</option>
          <option value="Infraestructura">Infraestructura</option>
          <option value="Salud">Salud</option>
          <option value="Juventud">Juventud</option>
          <option value="Economía">Economía</option>
        </select>
        <select name="nivel" value={propuesta.nivel} onChange={handleChange} className="input">
          <option value="Barrial">Barrial</option>
          <option value="Zonal">Zonal</option>
          <option value="Estatal">Estatal</option>
          <option value="Nacional">Nacional</option>
        </select>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Cancelar</button>
          <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">Guardar</button>
        </div>
      </div>
    </div>
  );
}
