"use client";
import * as React from "react";
import ContainerPage from "@/components/container";
import TransitionPage from "@/components/transition-page";
import Wordpress from "@/components/portfolio/wordpress";
import useTranslation from "@/hooks/use-translation";

const Portfolio = () => {

  const { t } = useTranslation();

  return (
    <>
      <div className="flex min-h-[100vh] h-full bg-no-repeat">
        <TransitionPage />
        <ContainerPage>
          <div className="w-full md:w-[80%]">
            <div className="justify-items-center">
              <h1 className="font-bold mb-5 text-2xl leading-tight text-center md:text-4xl md:mb-10 ">
                {t('portfolio.title')}
                <br />
                <span className="text-[#7828c8] dark:text-[#9455d3]">
                  {t('portfolio.subtitle')}
                </span>
              </h1>
              <div className="flex flex-col justify-items-center items-center">
                <p className="text-center text-lg px-0 py-6 md:px-8">
                  {t('portfolio.description')}
                  <br/>
                  <span className="font-semibold text-[#7828c8] dark:text-[#9455d3]">
                    {t('portfolio.ascent')}
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

export default Portfolio;
