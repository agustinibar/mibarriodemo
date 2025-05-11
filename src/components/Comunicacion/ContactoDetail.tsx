"use client";

import { Contacto } from "@/utils/contacto";

type Props = {
  contacto: Contacto;
  onBack: () => void;
};

export default function ContactoDetail({ contacto, onBack }: Props) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <button
        onClick={onBack}
        className="text-blue-500 hover:underline mb-4"
      >
        ← Volver a la lista de contactos
      </button>
      <h2 className="text-2xl font-bold text-blue-700">{contacto.nombre}</h2>
      <p className="text-sm text-gray-500 mb-1">{contacto.institucion}</p>
      <p className="text-xs text-gray-400 mb-4">{contacto.tipo}</p>
      <div className="bg-gray-100 p-4 rounded">
        <h3 className="font-semibold mb-2">Información de contacto</h3>
        <p>Email: {contacto.email || "No disponible"}</p>
        <p>Teléfono: {contacto.telefono || "No disponible"}</p> 
        <p className="mt-2">{contacto.descripcion}</p>
      </div>
    </div>
  );
}
