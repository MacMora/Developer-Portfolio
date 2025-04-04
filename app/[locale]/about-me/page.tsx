'use client';
import * as React from "react";
import ContainerPage from "@/components/container";
import Curriculum from "@/components/curriculum";
import TransitionPage from "@/components/transition-page";
import Image from "next/image";
import useTranslation from "@/hooks/use-translation";



const AboutMe = () => {

  const { t } = useTranslation();

  return (
    <>
      <div className="flex min-h-[100vh] h-full bg-no-repeat">
        <TransitionPage />
        <ContainerPage>
          <div className="">
            <div className="justify-items-center">
              <h1 className="text-[#7828c8] dark:text-[#9455d3] font-bold mb-5 text-2xl leading-tight text-center md:text-4xl md:mb-10 ">
                {t('about_me.title')}
              </h1>
              <div className="flex flex-col justify-items-center items-center">
                <Image
                  src="/images/Foto_Personal.jpeg"
                  alt="Foto Macjainer"
                  width="300"
                  height="300"
                  className="rounded-full border-solid border-4  dark:border-[#DDDDDD] border-[#333333]"
                />
                <p className="md:w-2/4 text-center w-full text-lg px-0 py-6 md:px-8">
                  {t('about_me.description')}
                </p>
              </div>
            </div>
            <div className="py-[80px]">
                <h2 className="text-[#7828c8] dark:text-[#9455d3] font-bold mb-5 text-2xl leading-tight text-center md:text-4xl md:mb-10 ">{t('about_me.title_2')}</h2>
                <Curriculum />
            </div>
          </div>
        </ContainerPage>
      </div>
    </>
  );
};

export default AboutMe;
