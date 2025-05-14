"use client";

import { sendMessage, subscribeToChat } from "@/Firebase/Handlers/MessagesHandler";
import { Candidato } from "@/interfaces/ICandidato";
import { Message } from "@/interfaces/IChat";
import { SendHorizonal } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  contacto: Candidato;
};

export default function Chat({ contacto } : Props){
    const [mensajes, setMensajes] = useState<Message[]>([])
    const [nuevoMensaje, setNuevoMensaje] = useState("");

      useEffect(() => {
    const unsubscribe = subscribeToChat(contacto.id, setMensajes);
    return () => unsubscribe(); // limpieza al desmontar
  }, [contacto.id]);

  const handleSend = async () => {
    if (!nuevoMensaje.trim()) return;
    await sendMessage(contacto.id, {
      from: "usuario",
      text: nuevoMensaje,
      timestamp: Date.now(),
    });
    setNuevoMensaje("");
  };
    return(
         <div className="flex flex-col h-[400px]">
      <div className="flex-1 overflow-y-auto border rounded p-2 mb-2 bg-gray-50">
        {mensajes.map((msg) => (
          <div
            key={msg.id}
            className={`mb-2 p-2 rounded max-w-[70%] ${
              msg.from === "usuario"
                ? "bg-blue-500 text-white self-end ml-auto"
                : "bg-gray-200 text-black"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 border p-2 rounded"
          value={nuevoMensaje}
          onChange={(e) => setNuevoMensaje(e.target.value)}
          placeholder="Escribe tu mensaje..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Enviar
        </button>
      </div>
    </div>
    )
}
