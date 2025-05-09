// utils/reportes.ts

export interface Reporte {
    id: string;
    titulo: string;
    tipo: "Actividad" | "Problemáticas" | "Propuestas" | "Usuarios" | "Comunicación" | "Sistema";
    descripcion: string;
    fecha: string; // ISO string
  }
  
  export const reportes: Reporte[] = [
    {
      id: "1",
      titulo: "Usuarios activos en la última semana",
      tipo: "Actividad",
      descripcion: "Se registraron 452 usuarios activos en los últimos 7 días.",
      fecha: "2025-05-08",
    },
    {
      id: "2",
      titulo: "Nuevas problemáticas reportadas",
      tipo: "Problemáticas",
      descripcion: "Se cargaron 128 nuevas problemáticas esta semana, especialmente en barrios periféricos.",
      fecha: "2025-05-08",
    },
    {
      id: "3",
      titulo: "Propuestas más valoradas",
      tipo: "Propuestas",
      descripcion: "3 propuestas superaron los 100 votos positivos: iluminación LED, plazas seguras y apoyo estudiantil.",
      fecha: "2025-05-07",
    },
    {
      id: "4",
      titulo: "Usuarios registrados",
      tipo: "Usuarios",
      descripcion: "Actualmente hay 3.524 usuarios registrados en la plataforma.",
      fecha: "2025-05-06",
    },
    {
      id: "5",
      titulo: "Mensajes enviados a representantes",
      tipo: "Comunicación",
      descripcion: "Se enviaron 203 mensajes a distintos representantes políticos o instituciones.",
      fecha: "2025-05-05",
    },
    {
      id: "6",
      titulo: "Errores del sistema detectados",
      tipo: "Sistema",
      descripcion: "No se detectaron errores críticos en los logs del sistema en las últimas 72 horas.",
      fecha: "2025-05-08",
    },
  ];
  