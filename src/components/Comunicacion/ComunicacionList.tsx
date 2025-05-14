// components/Comunicacion/ListaDecandidatos.tsx

"use client";

import { obtenerCandidatos } from "@/Firebase/Handlers/UsuariosHandler";
import { Candidato } from "@/interfaces/ICandidato";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  onSelect: (candidatos: Candidato)=> void;
};

export default function ListaDecandidatos({ onSelect } : Props) {
  const [candidatos, setCandidatos] = useState<Candidato[]>([]);

  useEffect(()=>{
    const unsuscribe = obtenerCandidatos((data)=>{
      setCandidatos(data)
    })

    return ()=> unsuscribe();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-blue-700">¿Con quién te quieres comunicar?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {candidatos.map((candidato) => (
          <div
            key={candidato.id}
            onClick={() => onSelect(candidato)}
            className="bg-white cursor-pointer p-4 rounded-xl shadow hover:shadow-lg transition-all border"
          >
            <h3 className="text-lg font-bold">{candidato.nombre}{candidato.apellido}</h3>
            <p className="text-sm text-gray-600">{candidato.cargo} · {candidato.zona}</p>
            {candidato.edad && (
              <p className="text-sm text-gray-500 italic">{candidato.edad} años.  </p>
            )}
            {/** FALTA LO DE PROPUESTAS */}
          </div>
        ))}
      </div>
    </div>
  );
}
