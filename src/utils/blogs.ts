import genericImage from '@/assets/norteDeSantander.jpg';

export interface BlogPost {
    id: string;
    title: string;
    category: string;
    description: string;
    content: string;
    date: string;
    image?: any;
    author: string;
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Recuperaremos la seguridad en las comunas de Cúcuta",
      category: "Propuesta del Candidato",
      description: "Nuestro compromiso es devolverle la tranquilidad a las familias del norte de Santander.",
      content:
        "Con la implementación de patrullajes inteligentes, cámaras de vigilancia en puntos críticos y la articulación con la Policía Nacional, proponemos una política integral de seguridad ciudadana que proteja a nuestros barrios y fomente la convivencia.",
      date: "03 de Mayo, 2025",
      image: genericImage,
      author: "Carlos Ramírez – Candidato a la Alcaldía de Cúcuta",
    },
    {
      id: "2",
      title: "Iniciamos obras de pavimentación en Villa del Rosario",
      category: "Noticia barrial",
      description: "Más de 5 km de calles serán pavimentadas en zonas históricamente olvidadas.",
      content:
        "Gracias al trabajo conjunto con la comunidad y los entes territoriales, iniciamos el mejoramiento vial en Villa del Rosario. Estas obras permitirán mayor movilidad, dignidad y desarrollo local para nuestros vecinos.",
      date: "02 de Mayo, 2025",
      image: genericImage,
      author: "Andrea Soto – Concejal de Villa del Rosario",
    },
    {
      id: "3",
      title: "Jóvenes con Futuro: Programa de empleo y formación",
      category: "Propuesta del Candidato",
      description: "Anunciamos el lanzamiento de un programa de capacitación técnica para jóvenes vulnerables.",
      content:
        "En Norte de Santander, el desempleo juvenil es una de nuestras prioridades. Nuestro programa 'Jóvenes con Futuro' ofrecerá becas técnicas, pasantías con empresas locales y acceso a créditos para emprendimiento.",
      date: "01 de Mayo, 2025",
      image: genericImage,
      author: "Luis Medina – Diputado Departamental",
    },
    {
      id: "4",
      title: "Canal de atención directa a los vecinos del barrio Aeropuerto",
      category: "Comunicado",
      description: "Ahora puedes enviar tus reclamos, sugerencias y propuestas directamente desde tu celular.",
      content:
        "Habilitamos un canal digital directo con mi equipo para escuchar a los vecinos del barrio Aeropuerto. Estamos comprometidos con una política cercana, transparente y al servicio del pueblo.",
      date: "30 de Abril, 2025",
      image: genericImage,
      author: "Paola Guerrero – Gestora Social de Cúcuta",
    },
  ];
  