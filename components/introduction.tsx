import useTranslation from "@/hooks/use-translation";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { Button } from "@heroui/react";

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
          <div className="flex items-center justify-center md:justify-start">
            <Link
              href="/portfolio"
            >
              <Button color="secondary" variant="ghost" >{t('inicio.button.projects')}</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
