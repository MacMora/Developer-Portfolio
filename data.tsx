import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Rss, Crop, Pencil, Computer, Book, Rocket, Speech, Github, Download, Earth } from "lucide-react";
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
        title: "Book",
        icon: <BookText size={25} className="color-black dark:color-white" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} className="color-black dark:color-white" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} className="color-black dark:color-white" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const experiencia = [
    {
        id: 1,
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
    {
        id: 2,
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
]


export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];
