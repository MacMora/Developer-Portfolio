import {
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Rss,
  Github,
  Earth,
} from "lucide-react";
import useTranslation from "./hooks/use-translation";

export const socialNetworks = [
  {
    id: 1,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/macjainer-molano-ramos-419499293/",
  },
  {
    id: 2,
    logo: <Github size={30} strokeWidth={1} />,
    src: "https://github.com/MacMora",
  },
  {
    id: 3,
    logo: <Earth size={30} strokeWidth={1} />,
    src: "https://www.upwork.com/freelancers/~01d6d079283ede29c2?mp_source=share",
  },
  {
    id: 4,
    logo: <Rss size={30} strokeWidth={1} />,
    src: "https://es.fiverr.com/s/Egl2vYD",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: (
      <HomeIcon
        size={25}
        className="color-black dark:color-white"
        strokeWidth={1}
      />
    ),
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: (
      <UserRound
        size={25}
        className="color-black dark:color-white"
        strokeWidth={1}
      />
    ),
    link: "/about-me",
  },
  {
    id: 3,
    title: "Target",
    icon: (
      <CodeSquare
        size={25}
        className="color-black dark:color-white"
        strokeWidth={1}
      />
    ),
    link: "/portfolio",
  },
];

export function TranslatedData() {
  const { t } = useTranslation();

  return {
    experiencia: [
      {
        id: 1,
        title: t("about_me.experience.sibartech.title"),
        subtitle: "Sibartech Tecnology",
        short_description: t("about_me.experience.sibartech.short_description"),
        description: t("about_me.experience.sibartech.description"),
        date: t("about_me.experience.sibartech.date"),
        habilities: [
          t("about_me.experience.sibartech.habilities.1"),
          t("about_me.experience.sibartech.habilities.2"),
          t("about_me.experience.sibartech.habilities.3"),
          t("about_me.experience.sibartech.habilities.4"),
          t("about_me.experience.sibartech.habilities.5"),
        ],
      },
      {
        id: 2,
        title: t("about_me.experience.coordenadas.title"),
        subtitle: "Coordenadas.co",
        short_description: t(
          "about_me.experience.coordenadas.short_description"
        ),
        description: t("about_me.experience.coordenadas.description"),
        date: t("about_me.experience.coordenadas.date"),
        habilities: [
          t("about_me.experience.coordenadas.habilities.1"),
          t("about_me.experience.coordenadas.habilities.2"),
          t("about_me.experience.coordenadas.habilities.3"),
          t("about_me.experience.coordenadas.habilities.4"),
          t("about_me.experience.coordenadas.habilities.5"),
          t("about_me.experience.coordenadas.habilities.6"),
        ],
      },
    ],
  };
}

export function DataPortfolio() {
  const { t } = useTranslation();

  return {
    dataWordpress: [
      {
        id: 1,
        title: "Visa Advisers Immigration Solutions",
        short_description: t(
          "portfolio.projects.wordpress.visa_advisers.short_description"
        ),
        description: t(
          "portfolio.projects.wordpress.visa_advisers.description"
        ),
        image: "/images/wordpress/visa-advisers-banner.jpg",
        urlWeb: "https://visaadvisers.co.nz/",
        habilities: ["Wordpress", "Elementor"],
      },
      {
        id: 2,
        title: "Factronics",
        short_description: t(
          "portfolio.projects.wordpress.factronics.short_description"
        ),
        description: t("portfolio.projects.wordpress.factronics.description"),
        image: "/images/wordpress/factronics-banner.jpg",
        urlWeb: "https://factronicsusa.com/",
        habilities: ["Wordpress", "Elementor"],
      },
      {
        id: 3,
        title: "Indicame.Link",
        short_description: t(
          "portfolio.projects.wordpress.indicame.short_description"
        ),
        description: t("portfolio.projects.wordpress.indicame.description"),
        image: "/images/wordpress/indicame-banner.jpg",
        urlWeb: "https://indicame.link/",
        habilities: ["Wordpress", "Elementor"],
      },
      {
        id: 4,
        title: "New Blossom Medical Aesthetics",
        short_description: t(
          "portfolio.projects.wordpress.new_blossom.short_description"
        ),
        description: t("portfolio.projects.wordpress.new_blossom.description"),
        image: "/images/wordpress/newblossom-banner.jpg",
        urlWeb: "https://newblossommedicalaesthetics.com/",
        habilities: [
          "Wordpress",
          "Elementor",
          "Woocommerce",
          "Hubspot",
          "Stripe",
        ],
      },
      {
        id: 5,
        title: "IdeaLaser Cosmetic Center of Miami",
        short_description: t(
          "portfolio.projects.wordpress.idealaser.short_description"
        ),
        description: t("portfolio.projects.wordpress.idealaser.description"),
        image: "/images/wordpress/idealaser-banner.jpg",
        urlWeb: "https://www.idealasermiami.com/",
        habilities: ["Hosting Setup", "CPANEL", "PHP", "Wordpress"],
      },
      {
        id: 6,
        title: "Coordenadas.Co",
        short_description: t(
          "portfolio.projects.wordpress.coordenadas.short_description"
        ),
        description: t("portfolio.projects.wordpress.coordenadas.description"),
        image: "/images/wordpress/coordenadas-banner.jpg",
        urlWeb: "https://coordenadas.co/",
        habilities: ["Wordpress", "Elementor", "SEO", "Hosting"],
      },
      {
        id: 7,
        title: "2Hermanos Ron Premium",
        short_description: t(
          "portfolio.projects.wordpress.2hermanos.short_description"
        ),
        description: t("portfolio.projects.wordpress.2hermanos.description"),
        image: "/images/wordpress/2hermanos-banner.jpg",
        urlWeb: "https://destiladoshermanos.com/",
        habilities: [
          "Wordpress",
          "Elementor",
          "Rank Math SEO",
          "Hosting",
          "TranslatePress",
        ],
      },
      {
        id: 8,
        title: "Pro-Rei USA",
        short_description: t(
          "portfolio.projects.wordpress.pro_rei.short_description"
        ),
        description: t("portfolio.projects.wordpress.pro_rei.description"),
        image: "/images/wordpress/pro-rei-banner.jpg",
        urlWeb: "https://proreiusa.com/",
        habilities: ["Wordpress", "Elementor", "Yoast SEO", "Hosting"],
      },
      {
        id: 9,
        title: "SMFarma",
        short_description: t(
          "portfolio.projects.wordpress.smfarma.short_description"
        ),
        description: t('portfolio.projects.wordpress.smfarma.description'),
        image: "/images/wordpress/smfarma-banner.jpg",
        urlWeb: "http://smfarma.es.mialias.net/",
        habilities: ["Wordpress", "Elementor Pro", "Envato"],
      },
      {
        id: 10,
        title: "Piojitos Boom",
        short_description: t(
          "portfolio.projects.wordpress.piojitos_boom.short_description"
        ),
        description: t("portfolio.projects.wordpress.piojitos_boom.description"),
        image: "/images/wordpress/piojitos-banner.jpg",
        urlWeb: "https://piojitosboom.com/",
        habilities: ["Wordpress", "Elementor Pro", "Envato"],
      },
      {
        id: 11,
        title: "Clínica del Pie Aguilar",
        short_description: t(
          "portfolio.projects.wordpress.clinica_aguilar.short_description"
        ),
        description: t("portfolio.projects.wordpress.clinica_aguilar.description"),
        image: "/images/wordpress/clinica-aguilar-banner.jpg",
        urlWeb: "https://clinicadelpieaguilar.com/",
        habilities: ["Wordpress", "Elementor Pro", "Envato", "Figma"],
      },
      {
        id: 12,
        title: "Customizarte",
        short_description: t(
          "portfolio.projects.wordpress.customizarte.short_description"
        ),
        description: t("portfolio.projects.wordpress.customizarte.description"),
        image: "/images/wordpress/customizarte-banner.jpg",
        urlWeb: "http://customizarte.es.mialias.net/",
        habilities: ["Wordpress", "Elementor Pro", "Envato", "Figma"],
      },
    ],
    dataReact: [
      {
        id: 1,
        title: "PayWise",
        short_description: t(
          "portfolio.projects.react.paywise.short_description"
        ),
        description: t(
          "portfolio.projects.react.paywise.description"
        ),
        image: "/images/react/paywise-banner.jpg",
        urlWeb: "https://docs.paywise.co/",
        urlGithub: "https://github.com/MacMora/Paywise",
        habilities: ["Next.js", "React", "cPanel"],
      },
    ]
  };
}
