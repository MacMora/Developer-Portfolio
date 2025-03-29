import * as React from "react";
import ContainerPage from "@/components/container";
import TransitionPage from "@/components/transition-page";
import Wordpress from "@/components/portfolio/wordpress";

const AboutMe = () => {
  return (
    <>
      <div className="flex min-h-[100vh] h-full bg-no-repeat">
        <TransitionPage />
        <ContainerPage>
          <div className="w-full md:w-[80%]">
            <div className="justify-items-center">
              <h1 className="font-bold mb-5 text-2xl leading-tight text-center md:text-4xl md:mb-10 ">
                SOLUCIONES WEB A MEDIDA
                <br />
                <span className="text-[#7828c8] dark:text-[#9455d3]">
                  DESARROLLO, AUTOMATIZACIÓN Y RESULTADOS
                </span>
              </h1>
              <div className="flex flex-col justify-items-center items-center">
                <p className="text-center text-lg px-0 py-6 md:px-8">
                  Transformo ideas en realidades digitales. Con experiencia en
                  desarrollo web{" "}
                  <span className="font-semibold text-[#7828c8] dark:text-[#9455d3]">
                    WordPress y React/Next.js
                  </span>{" "}
                  y automatización de procesos con{" "}
                  <span className="font-semibold text-[#7828c8] dark:text-[#9455d3]">
                    Make.com
                  </span>
                  , creo soluciones técnicas eficientes, escalables y centradas
                  en el usuario. Desde sitios web y e-commerce hasta
                  aplicaciones interactivas y flujos de trabajo automatizados,
                  cada proyecto se diseña para cumplir objetivos claros:
                  rendimiento, seguridad y crecimiento.
                  <br/>
                  <span className="font-semibold text-[#7828c8] dark:text-[#9455d3]">
                    ¿Buscas un desarrollo web robusto u optimizar procesos con
                    tecnología? Hablemos.
                  </span>
                </p>
              </div>
            </div>
            <div>
              <Wordpress />
            </div>
          </div>
        </ContainerPage>
      </div>
    </>
  );
};

export default AboutMe;
