// utils/propuestas.ts

export interface Propuesta {
    id: string;
    titulo: string;
    descripcion: string;
    eje: "Seguridad" | "Educación" | "Infraestructura" | "Salud" | "Juventud" | "Economía";
    nivel: "Barrial" | "Zonal" | "Estatal" | "Nacional";
    fecha: string;
    autor: string;
  }
  
  export const propuestas: Propuesta[] = [
    {
      id: "1",
      titulo: "Iluminación total de calles internas",
      descripcion: "Plan de mejora del alumbrado público en los barrios San Martín y El Escobal para aumentar la seguridad nocturna.",
      eje: "Seguridad",
      nivel: "Barrial",
      fecha: "2025-04-25",
      autor: "Líder Comunitario - Javier Camargo",
    },
    {
      id: "2",
      titulo: "Creación de centros juveniles zonales",
      descripcion: "Implementación de centros culturales y tecnológicos en cada comuna para prevenir la delincuencia juvenil.",
      eje: "Juventud",
      nivel: "Zonal",
      fecha: "2025-04-27",
      autor: "Candidato Zonal - María Rojas",
    },
    {
      id: "3",
      titulo: "Hospital de Alta Complejidad en Villa del Rosario",
      descripcion: "Construcción de un nuevo hospital con especialidades que cubra las necesidades de la zona metropolitana de Cúcuta.",
      eje: "Salud",
      nivel: "Estatal",
      fecha: "2025-05-01",
      autor: "Candidato a la Gobernación - Jorge Acevedo",
    },
    {
      id: "4",
      titulo: "Subsidio a emprendedores jóvenes",
      descripcion: "Plan nacional de microcréditos sin intereses para jóvenes emprendedores en zonas vulnerables del país.",
      eje: "Economía",
      nivel: "Nacional",
      fecha: "2025-04-15",
      autor: "Candidato Presidencial - Ana María Contreras",
    },
    {
      id: "5",
      titulo: "Educación digital para adultos mayores",
      descripcion: "Talleres gratuitos en las bibliotecas barriales para que los adultos mayores aprendan a usar internet y smartphones.",
      eje: "Educación",
      nivel: "Barrial",
      fecha: "2025-04-20",
      autor: "Líder Barrial - Carlos Peña",
    },
  ];
  