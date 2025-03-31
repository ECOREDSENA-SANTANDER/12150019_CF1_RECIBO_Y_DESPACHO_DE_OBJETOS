export default {
  global: {
    Name:
      'Gestión de recepción y despacho según las características del producto',
    Description:
      'Para gestionar eficazmente las áreas de recepción y despacho, es clave identificar el proceso que incluye recepción, almacenamiento, organización y envío de productos. Este proceso depende de características como tamaño, peso, perecibilidad o fragilidad, las cuales determinan los procedimientos y recursos necesarios para optimizar tiempos, reducir costos y mejorar la satisfacción del cliente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/imagen.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Entendiendo el concepto y la naturaleza de la carga',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tipos de carga',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Características de objetos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Bandas transportadoras',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Concepto de recibido y despacho',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Los principales objetivos del proceso de recibido de mercancías',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Métodos y técnicas de extracción de objetos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Las áreas de recibo más reconocidas',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Procedimiento de recepción de objetos',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Concepto de despacho',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Preparación y organización de áreas para recibo y despacho',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF6_631101_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '7 tipos de cargas y sus características para ser transportadas.',
      referencia:
        'TSafeLink Group. (2022, 14 septiembre). 7 tipos de cargas y sus características para ser transportadas.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=AJcRiQVyZao',
    },
    {
      tema: 'Recepción de Mercancías: qué es, fases y ejemplos.',
      referencia:
        'Recepción de mercancías: qué es, fases y ejemplos. (s. f.). Simpliroute. ',
      tipo: 'Blog',
      link: 'https://simpliroute.com/es/blog/recepcion-de-mercancias',
    },
    {
      tema: 'Centros de distribución y automatización en Concepto Logístico.',
      referencia:
        'MasContainer. (2022, 25 abril). Centros de distribución y automatización en Concepto Logístico.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BoiLWb0qBAE',
    },
  ],
  glosario: [
    {
      termino: 'Áreas de recibo',
      significado: 'espacios destinados para recibir mercancías en almacenes.',
    },
    {
      termino: 'Automatizado',
      significado:
        'se utilizan sistemas neumáticos para extraer los productos de forma más eficiente.',
    },
    {
      termino: 'Bandas Transportadoras',
      significado: 'dispositivos para mover mercancías sobre una cinta.',
    },
    {
      termino: 'Cadena de frío',
      significado:
        'control de temperatura constante para preservar alimentos y evitar su descomposición.',
    },
    {
      termino: 'Carga',
      significado: 'objetos o mercancías transportadas de un lugar a otro.',
    },
    {
      termino: 'Ciclo de distribución',
      significado:
        'etapas que siguen los productos desde su recepción hasta la entrega al cliente.',
    },
    {
      termino: 'Código de Barras',
      significado:
        'representación gráfica de información en forma de barras que facilita la identificación y el control de inventarios de mercancías.',
    },
    {
      termino: 'Desembalaje',
      significado: 'retirar el embalaje de los productos para inspección.',
    },
    {
      termino: 'EDI (Intercambio electrónico de datos)',
      significado:
        'sistema que permite el intercambio de datos estructurados entre sistemas para agilizar la comunicación comercial y logística.',
    },
    {
      termino: 'Etiquetado',
      significado:
        'colocación de rótulos o códigos en productos, ya sea de forma manual o automática, para su identificación y seguimiento.',
    },
    {
      termino: 'Tipos de carga',
      significado:
        'clasificación de la carga, como general, pesada, frágil, peligrosa, etc.',
    },
    {
      termino: 'Manual',
      significado:
        'el operario utiliza herramientas como carretillas y gatos hidráulicos para cargar y descargar los productos.',
    },
    {
      termino: 'Mecanizado',
      significado:
        'se emplean equipos como montacargas y bandas transportadoras para facilitar el traslado de productos.',
    },
    {
      termino: 'Montacargas',
      significado:
        'equipos mecanizados utilizados para levantar y mover mercancías pesadas dentro del almacén o centro de distribución.',
    },
    {
      termino: '<i>Picking</i>',
      significado:
        'proceso de selección y extracción de productos del almacén según los pedidos recibidos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Escudero Serrano, M. J., Escrivá Monzó, J., & Clar Bononad, F. (2000). Operaciones de Almacenaje. Madrid: McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Fernández, V. G. (2014). Manual. Operaciones Auxiliares de Almacenaje. Madrid: EDITORIAL CEP, S.L.',
      link: '',
    },
    {
      referencia:
        'Gomez, L. (2012, 6 diciembre). Recibos y despachos de mercancías.',
      link:
        'https://recibosydespachosdemercanciasaura.blogspot.com/2012/11/gestion-y-logistica-sena-eficacia-53.html',
    },
    {
      referencia:
        'Lozano Rojo, J. R. (2003). Operaciones de Almacenaje. Madrid: Editex S.A.',
      link: '',
    },
    {
      referencia: 'Rigo. (s. f.). NATURALEZA DE LOS OBJETOS.',
      link:
        'http://rigo-logistica.blogspot.com.co/2011/08/naturaleza-de-los-objetos.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ingrid Criollo García',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicio - Regional Tolima',
        },
        {
          nombre: 'Luisa Patricia Juvinao',
          cargo: 'Equipo de diseño curricular',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturistico – Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lucenith Pinilla Moreno',
          cargo: 'Desarrolladora <i>full-stack</i> junior',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
