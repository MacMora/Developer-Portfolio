import { CodeSquare, HomeIcon, UserRound, Linkedin, Rss, Github, Download, Earth } from "lucide-react";
/*import useTranslation from "./hooks/use-translation";

const { t } = useTranslation();*/

export const socialNetworks = [
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 2,
        logo: <Github size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 3,
        logo: <Earth size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 4,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 5,
        logo: <Download size={30} strokeWidth={1} />,
        src: "#!",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} className="color-black dark:color-white" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} className="color-black dark:color-white" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Target",
        icon: <CodeSquare size={25} className="color-black dark:color-white" strokeWidth={1} />,
        link: "/portfolio",
    },
];

export const experiencia = [
    
    {
        id: 1,
        title: "Desarrollador Web en Wordpress y React",
        subtitle: "Sibartech Tecnology",
        short_description: "Trabajé como Desarrollador Web liderando proyectos en WordPress y React, desarrollando sitios dinámicos, responsivos y optimizados, desde la idea hasta su implementación final.",
        description: "Trabajé durante un año como desarrollador web en Sibartech Technology, donde dirigí y contribuí a múltiples proyectos enfocados en el desarrollo de sitios web dinámicos y funcionales utilizando WordPress y React. En este rol, fui responsable de planificar y ejecutar proyectos web desde la etapa inicial hasta la implementación final. Diseñé interfaces modernas y responsivas, optimicé el rendimiento del sitio web para tiempos de carga más rápidos e implementé soluciones avanzadas de administración de contenido en WordPress. Además, desarrollé integraciones personalizadas utilizando React para mejorar la interactividad y la funcionalidad del proyecto. También realicé configuraciones avanzadas de servidores, administré bases de datos y garanticé la seguridad del sitio web. En Sibartech Technology, trabajé en estrecha colaboración con los clientes para comprender sus necesidades específicas, brindando soluciones alineadas con sus objetivos comerciales. Esta experiencia me permitió desarrollar habilidades de gestión de proyectos y colaborar de manera efectiva con equipos multidisciplinarios.",
        date: "Enero 2023 - Febrero 2024",
        habilities: [
            "Planificación y ejecución de proyectos web: Responsabilidad de llevar proyectos desde la etapa inicial hasta la implementación final, asegurando que se cumplan los objetivos y plazos establecidos.",
            "Colaboración con clientes y equipos multidisciplinarios: Trabajo cercano con clientes para comprender sus necesidades y colaboración efectiva con equipos multidisciplinarios para alcanzar objetivos comunes.",
            "Desarrollo de integraciones personalizadas con React: Creación de soluciones personalizadas para mejorar la interactividad y funcionalidad de los proyectos, adaptándose a los requerimientos específicos.",
            "Diseño de interfaces de usuario (UI) modernas y responsivas: Creación de interfaces atractivas y funcionales que se adapten a diferentes dispositivos y brinden una experiencia de usuario óptima.",
            "Configuración avanzada de servidores y seguridad web: Realización de configuraciones de servidores y garantía de la seguridad de los sitios web para protegerlos de vulnerabilidades.",
        ]
    },
    {
        id: 2,
        title: "Desarrollador Web Ejecutivo",
        subtitle: "Coordenadas.co",
        short_description: "Actualmente me desempeño como Desarrollador Web Ejecutivo, creando y manteniendo sitios web a medida con WordPress y React, enfocado en UX, rendimiento y soluciones personalizadas para cada cliente.",
        description: "Actualmente me desempeño como Desarrollador Web Ejecutivo en Coordenadas.co, donde me he especializado en la creación y mantenimiento de sitios web a la medida utilizando WordPress y React. Mi principal foco fue mejorar la experiencia de usuario (UX) y optimizar el rendimiento de las plataformas desarrolladas. Como desarrollador líder implementé funcionalidades interactivas utilizando React, personalicé temas y plugins en WordPress con PHP y aseguré la compatibilidad con dispositivos móviles y navegadores. También trabajé en la integración de herramientas SEO para mejorar la visibilidad en buscadores, configuré servidores web y administré dominios para asegurar el buen funcionamiento de los proyectos. En este rol, logré entregar proyectos dentro de los plazos establecidos y con altos estándares de calidad, adaptándome a las necesidades específicas de los clientes.",
        date: "Marzo 2024 - Presente",
        habilities: [
            "Desarrollo y personalización de temas y plugins en WordPress: Capacidad para diseñar y desarrollar temas y plugins personalizados que se ajusten a las necesidades específicas de los clientes.",
            "Creación de interfaces de usuario dinámicas y responsivas con React.js: Diseño y desarrollo de interfaces de usuario interactivas y adaptables a diferentes dispositivos y tamaños de pantalla.",
            "Implementación y gestión de bases de datos (SQL, MySQL): Configuración y mantenimiento de bases de datos eficientes y seguras.",
            "Optimización de rendimiento y SEO: Implementación de técnicas de optimización para mejorar la velocidad de carga de las páginas y su posicionamiento en motores de búsqueda.",
            "Gestión de servidores y administración de dominios a través de cPanel: Configuración y mantenimiento de servidores web y gestión de dominios utilizando cPanel.",
            "Colaboración en equipos de desarrollo ágil: Participación en reuniones diarias de stand-up, planificación de sprints y revisiones de retrospectiva para mejorar continuamente el proceso de desarrollo.",
        ]
    },
]


export const dataPortfolio_wordpress = [
    {
        id: 1,
        title: "Visa Advisers Immigration Solutions",
        short_description: "Desarrollo y mantenimiento de contenido web para visas en NZ, incluyendo diseño de páginas informativas, actualización de blogs y rediseño de secciones existentes.",
        description: "Visa Advisers Immigration Solutions solicita continuamente soporte front-end para el diseño de nuevas páginas informativas para nuevos tipos de visas en Nueva Zelanda, así como para el rediseño de páginas existentes y para la publicación de blogs y noticias.",
        image: "#!",
        urlWeb: "#!",
        habilities: [
           "Wordpress",
           "Elementor" 
        ]
    },
    {
        id: 2,
        title: "Factronics",
        short_description: "Gestión de contenido técnico: creación de blogs, noticias y secciones informativas para soluciones industriales avanzadas.",
        description: "Factronics es una empresa que brinda soluciones de codificación, inspección, empaque y automatización al sector industrial, mi trabajo para esta empresa ha sido de soporte técnico para el desarrollo de noticias, blogs y lanzamiento de nuevas máquinas industriales.",
        image: "/image-1.jpg",
        urlWeb: "#!",
        habilities: [
           "Wordpress",
           "Elementor"
        ]
    },
    {
        id: 3,
        title: "Indicame.Link",
        short_description: "Soporte técnico continuo para plataforma cannábica: actualización de contenido, blogs y mantenimiento del entorno web.",
        description: "Indicame.Link, una plataforma colombiana para la comunidad cannábica donde compradores y vendedores tienen acceso a una plataforma que facilita el contacto y el comercio de cannabis. Mi trabajo para plataforma ha sido brindar soporte técnico y para la publicación de blogs, noticias, actualizaciones y negocios, así como para la actualización continua del entorno web.",
        image: "/image-1.jpg",
        urlWeb: "#!",
        habilities: [
           "Wordpress",
           "Elementor"
        ]
    },
    {
        id: 4,
        title: "New Blossom Medical Aesthetics",
        short_description: "Conversión de sitio informativo a e-commerce médico completo con sistema de reservas, pagos seguros y landing pages especializadas.",
        description: "New Blossom Medical Aesthetics ya contaba con un sitio web donde presentaba toda la información sobre sus procedimientos estéticos. Sin embargo, necesitaba apoyo continuo para convertirlo en una tienda online donde los clientes pudieran comprar, reservar y pagar sus procedimientos médicos. Mi trabajo en este sitio web fue la configuración completa de la tienda virtual, desde el diseño de sus productos hasta el sistema de pago seguro, además del desarrollo de landing pages informativas sobre sus procedimientos y el apoyo continuo a los requisitos solicitados.",
        image: "/image-1.jpg",
        urlWeb: "#!",
        habilities: [
           "Wordpress",
           "Elementor",
           "Woocommerce",
           "Hubspot",
           "Stripe"
        ]
    },
    {
        id: 5,
        title: "IdeaLaser Cosmetic Center of Miami",
        short_description: "Reestructuración completa del backend: actualización de tecnologías, optimización de rendimiento y solución de problemas de estabilidad para un sitio web crítico.",
        description: "IdeaLaser ha sido una de las páginas más delicadas con las que he trabajado, esto debido a que presentaba muchos problemas, anteriormente era imposible realizar cambios sin que el servidor de la página se cayera, además, estaba desactualizada en todo aspecto, por esta razón, mi rol en la página de IdeaLaser fue de soporte a la página web realizando un mantenimiento profundo en el cual se actualizó correctamente la versión del lenguaje de programación, su entorno de desarrollo, extensiones, plugins y todo lo relacionado al backend, dando como resultado un sitio web más estable, escalable y optimizado, mejorando considerablemente su tiempo de carga y la sostenibilidad del sitio web.",
        image: "/image-1.jpg",
        urlWeb: "#!",
        habilities: [
           "Hosting Setup",
           "CPANEL",
           "PHP",
           "Wordpress"
        ]
    },
    {
        id: 6,
        title: "Coordenadas.Co",
        short_description: "Rediseño completo de sitio web corporativo con integraciones a HubSpot, optimización SEO y soporte continuo para contenido.",
        description: "Rediseño para el Sitio web de Coordenadas.Co, agencia de marketing y desarrollo web, anteriormente contaban con un sitio web anticuado que no aprovechaba al máximo las herramientas con la que contaba, sin embargo, decidieron renovar por completo el diseño y la tecnología para atraer más clientes potenciales, para este proyecto he tenido el rol de desarrollador principal, desarrollando el sitio web y creando las conexiones a las herramientas que utilizan, por ejemplo, HubSpot, para este sitio se ha desarrollado un sitio web amigable, con buenas prácticas y completamente personalizado, brindando continuamente soporte para la publicación de blogs, casos de estudio, landing pages y conexiones API a otras herramientas.",
        image: "/image-1.jpg",
        urlWeb: "#!",
        habilities: [
           "Wordpress",
           "Elementor",
           "SEO",
           "Hosting"
        ]
    },
    {
        id: 7,
        title: "2Hermanos Ron Premium",
        short_description: "Desarrollo web personalizado bilingüe (ES/EN) que refleja fielmente la identidad de marca con diseño exclusivo.",
        description: "2Hermanos, ron premium elaborado en Panamá, estaba interesado en crear una página web básica, pero con un diseño totalmente único y personalizado hecho por ellos mismos, el gran reto con esta página web fue replicar el diseño en la página web, lo interesante de esta página es que cuenta con un diseño único e interesante, totalmente personalizado y realizado por la marca 2 Hermanos, retratando por completo la esencia de su ron, algo muy importante a mencionar es que se desarrolló una página totalmente bilingüe (español/inglés), dando como resultado una página para 2Hermanos totalmente personalizada, única y completa.",
        image: "/image-1.jpg",
        urlWeb: "#!",
        habilities: [
           "Wordpress",
           "Elementor",
           "Rank Math SEO",
           "Hosting",
           "TranslatePress"
        ]
    },
    {
        id: 8,
        title: "Pro-Rei USA",
        short_description: "Creación de sitio web corporativo 100% personalizado con enfoque en seguridad, rendimiento y generación de leads.",
        description: "Pro-Rei, expertos en transformar espacios residenciales en Estados Unidos, estaban interesados en crear un sitio web que compartiera su experiencia y atrajera nuevos clientes interesados en sus servicios, facilitando el contacto entre clientes y los directivos de Pro-Rei, como desarrollador líder, tuve total libertad creativa para la creación de la página, teniendo contacto con Pro-Rei para crear una página 100% personalizada, como resultado, una página única que demuestra la identidad de Pro-Rei, además, la configuración completa para aumentar la seguridad del sitio web, junto con buenas prácticas que influyen en la optimización y eficiencia del sitio web.",
        image: "/images/pro-rei-banner.jpg",
        urlWeb: "https://proreiusa.com/",
        habilities: [
           "Wordpress",
           "Elementor",
           "Yoast SEO",
           "Hosting"
        ]
    },
];
