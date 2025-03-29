import useTranslation from "@/hooks/use-translation";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

function Introduction() {
  const { t } = useTranslation();

  return (
    <div className="z-20 w-full">
      <div className="z-20 grid items-center h-full p-6 py-40 md:py-0 md:grid-cols-2">
        <Image
          src="/images/macjainer-molano-animado.png"
          priority
          width="500"
          height="500"
          alt="principal-image"
          className="justify-self-end"
        />

        <div className="flex flex-col justify-center max-w-xl">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10 ">
            MACJAINER MOLANO RAMOS
            <br />
            <TypeAnimation
              sequence={[
                t("inicio.sequence.line_1"),
                1000,
                t("inicio.sequence.line_2"),
                1000,
                t("inicio.sequence.line_3"),
                1000,
                t('inicio.sequence.line_4'),
                1000,
                t('inicio.sequence.line_5'),
                1000,
                t('inicio.sequence.line_6'),
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-[#7828c8] dark:text-[#9455d3]"
            />
          </h1>
          <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
            {t("inicio.description")}
          </p>
          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
            <Link
              href="/proyectos"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl border-black dark:border-white hover:shadow-xl dark:hover:shadow-white/50 hover:shadow-black/50"
            >
              {t('inicio.button.projects')}
            </Link>
            <Link
              href="/proyectos"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-[#0070f0]/50 dark:hover:shadow-[#67abf9]/50 text-[#0070f0] dark:text-[#67abf9] border-[#0070F0] dark:border-[#67abf9]"
            >
              {t('inicio.button.contact')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
