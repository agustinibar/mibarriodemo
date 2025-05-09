// utils/contactos.ts

export interface Contacto {
    id: string;
    nombre: string;
    tipo: "Senador" | "Intendente" | "Líder Barrial" | "Líder Universitario" | "Partido Político" | "Agrupación" | "Sociedad de Fomento" | "Cooperativa Barrial";
    institucion?: string;
    descripcion: string;
    zona: string;
  }
  
  export const contactos: Contacto[] = [
    {
      id: "1",
      nombre: "Sandra Rodríguez",
      tipo: "Senador",
      institucion: "Senado de la República",
      descripcion: "Senadora por Norte de Santander, enfocada en derechos sociales y educación.",
      zona: "Norte de Santander",
    },
    {
      id: "2",
      nombre: "Carlos Buitrago",
      tipo: "Intendente",
      institucion: "Municipio de Cúcuta",
      descripcion: "Intendente municipal con enfoque en obras públicas y transporte.",
      zona: "Cúcuta",
    },
    {
      id: "3",
      nombre: "Lucía Torres",
      tipo: "Líder Barrial",
      institucion: "Barrio La Esperanza",
      descripcion: "Referente comunitaria comprometida con la seguridad barrial.",
      zona: "Barrio La Esperanza",
    },
    {
      id: "4",
      nombre: "David Mendoza",
      tipo: "Líder Universitario",
      institucion: "Universidad de Pamplona",
      descripcion: "Dirigente estudiantil activo en propuestas educativas y empleo joven.",
      zona: "Pamplona",
    },
    {
      id: "5",
      nombre: "Partido Progreso Popular",
      tipo: "Partido Político",
      descripcion: "Agrupación política centrada en el desarrollo regional y la equidad.",
      zona: "Nacional",
    },
    {
      id: "6",
      nombre: "Sociedad de Fomento San Rafael",
      tipo: "Sociedad de Fomento",
      descripcion: "Institución que fomenta mejoras urbanas, sociales y deportivas en el barrio.",
      zona: "San Rafael, Cúcuta",
    },
    {
      id: "7",
      nombre: "Cooperativa Barrial Unidos",
      tipo: "Cooperativa Barrial",
      descripcion: "Cooperativa que promueve el trabajo autogestionado y solidario en barrios periféricos.",
      zona: "Los Patios",
    },
  ];
  