"use client";
import { TranslatedData } from "@/data";
import { useState, useEffect } from "react";
import useTranslation from "@/hooks/use-translation";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

// Define la interfaz para los items de experiencia
interface ExperienceItem {
  id: number;
  title: string;
  subtitle: string;
  short_description: string;
  description: string;
  date: string;
  habilities: string[];
}

const Curriculum = () => {

  const { t } = useTranslation();

  const { experiencia } = TranslatedData();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedExperience, setSelectedExperience] =
    React.useState<ExperienceItem | null>(null);

  const handleOpen = (experienceItem: ExperienceItem) => {
    setSelectedExperience(experienceItem);
    onOpen();
  };

  const [modalSize, setModalSize] = useState<"4xl" | "full">("4xl");

  useEffect(() => {
    const handleResize = () => {
      setModalSize(window.innerWidth < 640 ? "full" : "4xl");
    };

    handleResize(); // Ejecuta la función al cargar el componente
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col justify-center divide-y divide-slate-200">
      <div className="w-full max-w-3xl mx-auto md:pb-40 md:pt-20">
        <div className="-my-6">
          {experiencia.toReversed().map((data) => (
            <div key={data.id} className="relative py-6 pl-8 sm:pl-32 group">
              <h3 className="mb-1 text-2xl font-bold sm:mb-0">{data.title}</h3>
              <div
                className="flex flex-col items-start mb-1 
                  group-last:before:hidden before:absolute 
                  before:left-2 sm:before:left-0 before:h-full
                  before:px-px before:bg-[#333333E0] dark:before:bg-[#E0E0E0E0] sm:before:ml-[6.5rem] 
                  before:self-start before:-translate-x-1/2 
                  before:translate-y-3 after:absolute after:left-2 
                  sm:after:left-0 after:w-2 after:h-2 after:bg-[#7828c8] dark:after:bg-[#9455d3] 
                  after:border-4 after:box-content after:border-[#333333E0] dark:after:border-[#E0E0E0E0]
                  after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 
                  after:translate-y-1.5"
              >
                <time className="translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-auto h-6 p-4 mb-3 sm:mb-0 text-[#E0E0E0E0] bg-[#7828c8]  dark:bg-[#9455d3] rounded-full">
                  {data.date}
                </time>
                <div className="text-xl font-bold pt-2">{data.subtitle}</div>
              </div>
              <div>{data.short_description}</div>
              <div className="flex flex-wrap gap-3 py-2">
                <Button
                  color="secondary"
                  variant="ghost"
                  onPress={() => handleOpen(data)}
                >
                  {t('buttons.learn')}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedExperience && (
        <Modal
          backdrop={"blur"}
          size={modalSize}
          isDismissable={true}
          isOpen={isOpen}
          onClose={onClose}
          scrollBehavior="outside"
        >
          <ModalContent className="z-100 overflow-auto">
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {selectedExperience.title}
                </ModalHeader>
                <ModalBody>
                  <p>{selectedExperience.subtitle}</p>
                  <p>{selectedExperience.description}</p>
                  <ul className="list-disc pl-5 space-y-2">
                    {selectedExperience.habilities &&
                      Object.values(selectedExperience.habilities).map(
                        (hability, index) => <li key={index}>{hability}</li>
                      )}
                  </ul>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    {t('buttons.close')}
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default Curriculum;
