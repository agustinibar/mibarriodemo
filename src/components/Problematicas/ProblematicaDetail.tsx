import { Problema } from "@/utils/problems";

type Props = {
    problema: Problema;
    onBack: () => void;
  };
  
  export default function ProblematicaDetail({ problema, onBack }: Props) {
    return (
      <div className="bg-white p-6 rounded shadow">
        <button
          onClick={onBack}
          className="text-blue-500 hover:underline mb-4"
        >
          ← Volver a la lista
        </button>
        <h2 className="text-2xl font-bold text-red-600">{problema.titulo}</h2>
        <p className="text-sm text-gray-500 mb-4">Estado: {problema.estado}</p>
        <p className="mb-4">{problema.descripcion}</p>
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-semibold mb-1">Solución propuesta:</h3>
          <p>{problema.acciones}</p>
        </div>
      </div>
    );
  }
  