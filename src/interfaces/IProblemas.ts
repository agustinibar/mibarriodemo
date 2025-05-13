import { Timestamp } from "firebase/firestore";

export type Problematica = {
  titulo: string;
  descripcion: string;
  barrio: string;
  vecino?: string;
};

export type Problema = {
    id: string;
    titulo: string;
    descripcion: string;
    barrio: string;
    vecino: string;
    estado: "pendiente" | "en_proceso" | "resuelto";
    fecha?: string;
    acciones?: string[];
}