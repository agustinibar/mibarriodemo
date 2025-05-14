"use client";

import { useState } from "react";
import { crearCandidato } from "@/Firebase/Handlers/UsuariosHandler";
import { Candidato } from "@/interfaces/ICandidato";

type Props = {
  onClose: () => void;
};

export default function CandidatoFormulario({ onClose }: Props) {
  const [candidato, setCandidato] = useState<Omit<Candidato, "id">>({
    nombre: "",
    apellido: "",
    partido: "",
    cargo: "Concejal",
    zona: "",
    edad: 30,
    email: "",
    telefono: "",
    propuestas: [],
    fotoURL: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCandidato((prev) => ({
      ...prev,
      [name]: name === "edad" ? Number(value) : value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await crearCandidato(candidato);
      alert("✅ Candidato registrado con éxito");
      onClose();
    } catch (err) {
      alert("❌ Error al registrar el candidato");
      console.error(err);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-5xl mx-auto w-full h-full overflow-y-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">Registrar nuevo candidato</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="nombre" value={candidato.nombre} onChange={handleChange} placeholder="Nombre" className="input" />
        <input name="apellido" value={candidato.apellido} onChange={handleChange} placeholder="Apellido" className="input" />
        <input name="partido" value={candidato.partido} onChange={handleChange} placeholder="Partido" className="input" />
        <input name="zona" value={candidato.zona} onChange={handleChange} placeholder="Zona" className="input" />
        <input name="edad" value={candidato.edad} onChange={handleChange} type="number" placeholder="Edad" className="input" />
        <input name="email" value={candidato.email} onChange={handleChange} placeholder="Email" className="input" />
        <input name="telefono" value={candidato.telefono} onChange={handleChange} placeholder="Teléfono" className="input" />
        <input name="fotoURL" value={candidato.fotoURL} onChange={handleChange} placeholder="Foto URL (opcional)" className="input" />
        <input
          name="propuestas"
          value={candidato.propuestas?.join(", ")}
          onChange={(e) =>
            setCandidato((prev) => ({
              ...prev,
              propuestas: e.target.value.split(",").map((p) => p.trim()),
            }))
          }
          placeholder="Propuestas (separadas por coma)"
          className="input col-span-1 md:col-span-2"
        />
        <select name="cargo" value={candidato.cargo} onChange={handleChange} className="input">
          <option value="Presidente">Presidente</option>
          <option value="Gobernador">Gobernador</option>
          <option value="Intendente">Intendente</option>
          <option value="Senador">Senador</option>
          <option value="Diputado">Diputado</option>
          <option value="Concejal">Concejal</option>
          <option value="LiderUniversitario">Lider Universitario</option>
          <option value="LiderBarrial">Lider Barrial</option>
        </select>
      </div>

      <div className="flex justify-end gap-2 mt-8">
        <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Cancelar</button>
        <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">Guardar</button>
      </div>
    </div>
  );
}
