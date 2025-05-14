"use client";

import { useState } from "react";
import { Candidato } from "@/interfaces/ICandidato";
import { MessageCircle } from "lucide-react";
import Chat from "@/components/Chat/Chat";

type Props = {
  contacto: Candidato;
  onBack: () => void;
};

export default function ContactoDetail({ contacto, onBack }: Props) {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="bg-white p-6 rounded shadow relative">
      <button
        onClick={onBack}
        className="text-blue-500 hover:underline mb-4"
      >
        ← Volver a la lista de contactos
      </button>

      <h2 className="text-2xl font-bold text-blue-700">{contacto.nombre}</h2>
      <p className="text-sm text-gray-500 mb-1">{contacto.cargo}</p>
      <p className="text-xs text-gray-400 mb-4">{contacto.partido}</p>

      <div className="bg-gray-100 p-4 rounded mb-4">
        <h3 className="font-semibold mb-2">Información de contacto</h3>
        <p>Email: {contacto.email || "No disponible"}</p>
        <p>Teléfono: {contacto.telefono || "No disponible"}</p>
      </div>
      { /* falta la parte de propuestas del candidato*/}

      {/* Boton de chat */}
      <button
        onClick={() => setShowChat(true)}
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
      >
        <MessageCircle size={20} />
        <span>Chatea con {contacto.nombre}</span>
      </button>

      {/* Modal de chat */}
      {showChat && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-4 relative">
            <button
              onClick={() => setShowChat(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <Chat contacto={contacto} />
          </div>
        </div>
      )}
    </div>
  );
}
