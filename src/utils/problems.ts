export interface Problema {
    id: string;
    titulo: string;
    barrio: string;
    fecha: string;
    descripcion: string;
    estado: "pendiente" | "en_proceso" | "resuelto";
    vecino?: string;
    acciones?: string[];
  }
  
  export const problemas: Problema[] = [
    {
      id: "1",
      titulo: "Fuga de agua en calle principal",
      barrio: "San Martín",
      fecha: "2025-05-01",
      descripcion: "Hace más de una semana hay una pérdida de agua en la esquina de la calle 9 con la 5ta.",
      estado: "en_proceso",
      vecino: "Carlos Ramírez",
      acciones: [
        "Se envió reporte a empresa de servicios.",
        "Se asignó cuadrilla para inspección (03/05).",
      ],
    },
    {
      id: "2",
      titulo: "Alumbrado público sin funcionar",
      barrio: "Villa del Rosario",
      fecha: "2025-04-28",
      descripcion: "Desde hace 15 días, 3 postes están apagados y la zona queda totalmente oscura.",
      estado: "pendiente",
      vecino: "Lucía Pérez",
    },
    {
      id: "3",
      titulo: "Basura acumulada cerca del parque",
      barrio: "Cúcuta Centro",
      fecha: "2025-04-20",
      descripcion: "Montones de basura sin recoger. Afecta a los niños que juegan en el parque.",
      estado: "resuelto",
      acciones: [
        "Se coordinó con la alcaldía local.",
        "La basura fue retirada el 25/04.",
      ],
    },
  ];
  