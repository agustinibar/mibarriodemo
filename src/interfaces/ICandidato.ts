export interface Candidato {
  id: string;
  nombre: string;
  apellido: string;
  partido: string;
  cargo: "Presidente" | "Gobernador" | "Intendente" | "Senador" | "Diputado" | "Concejal";
  zona: string; // puede ser barrio, provincia, etc.
  edad: number;
  propuestas?: string[]; // IDs de propuestas vinculadas
  fotoURL?: string;
}