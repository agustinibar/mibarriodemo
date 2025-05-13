export interface Propuesta {
    id: string;
    titulo: string;
    descripcion: string;
    eje: "Seguridad" | "Educación" | "Infraestructura" | "Salud" | "Juventud" | "Economía";
    nivel: "Barrial" | "Zonal" | "Estatal" | "Nacional";
    fecha: string;
    autor: string;
  }
  