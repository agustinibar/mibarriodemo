// components/Comunicacion/ListaDeContactos.tsx

"use client";

import { Contacto, contactos } from "@/utils/contacto";
import { useRouter } from "next/navigation";

type Props = {
  onSelect: (contactos: Contacto)=> void;
};

export default function ListaDeContactos({ onSelect } : Props) {
  const router = useRouter();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-blue-700">¿Con quién te quieres comunicar?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactos.map((contacto) => (
          <div
            key={contacto.id}
            onClick={() => onSelect(contacto)}
            className="bg-white cursor-pointer p-4 rounded-xl shadow hover:shadow-lg transition-all border"
          >
            <h3 className="text-lg font-bold">{contacto.nombre}</h3>
            <p className="text-sm text-gray-600">{contacto.tipo} · {contacto.zona}</p>
            {contacto.institucion && (
              <p className="text-sm text-gray-500 italic">{contacto.institucion}</p>
            )}
            <p className="mt-2 text-gray-700">{contacto.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
