"use client";
import { DataPortfolio } from "@/data";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useTranslation from "@/hooks/use-translation";
import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Code,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Pagination,
  Image,
  Link,
} from "@heroui/react";
import { SquareArrowOutUpRightIcon } from "lucide-react";

// Interfaz para los datos del proyecto
interface ProjectItem {
  id: number;
  title: string;
  short_description: string;
  description: string;
  image: string;
  urlWeb: string;
  habilities: string[];
}

const Wordpress: React.FC = () => {

  const { dataWordpress } = DataPortfolio();
  const { t } = useTranslation();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );
  const [modalSize, setModalSize] = useState<"4xl" | "full">("4xl");

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 6;
  const totalPages: number = Math.ceil(
    dataWordpress.length / itemsPerPage
  );

  useEffect(() => {
    const handleResize = () => {
      setModalSize(window.innerWidth < 640 ? "full" : "4xl");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpen = (projectItem: ProjectItem): void => {
    setSelectedProject(projectItem);
    onOpen();
  };

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const paginatedData: ProjectItem[] = dataWordpress
    .toReversed()
    .slice(startIndex, startIndex + itemsPerPage);

  // Animaciones de Framer Motion
  const gridVariants = {
    initial: { opacity: 0, x: "100vw" },
    animate: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100 },
    },
    exit: { opacity: 0, x: "-100vw", transition: { ease: "easeInOut" } },
  };

  return (
    <div className="py-[80px] justify-items-center">
      <div className="w-full">
        <h2 className="text-[#7828c8] dark:text-[#9455d3] font-bold text-xl leading-tight text-start md:text-2xl">
          {t('portfolio.projects.wordpress.content.title')}
        </h2>
        <p className="text-sm md:text-lg my-2">
          {t('portfolio.projects.wordpress.content.description')}
        </p>
        <ul className="text-sm md:text-lg list-disc pl-5 space-y-2">
          <li>
            {t('portfolio.projects.wordpress.content.main.1')}
          </li>
          <li>
            {t('portfolio.projects.wordpress.content.main.2')}
          </li>
          <li>
            {t('portfolio.projects.wordpress.content.main.3')}
          </li>
        </ul>
      </div>

      {/* Grid de proyectos paginados */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={gridVariants}
          className="py-[40px] gap-x-[20px] gap-y-[50px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
        >
          {paginatedData.map((data: ProjectItem) => (
            <Card key={data.id} isHoverable={true} shadow="lg">
              <CardBody className="overflow-visible p-0">
                <Image
                  alt={data.title}
                  className="w-full object-cover w-[380px]"
                  radius="lg"
                  shadow="sm"
                  src={data.image}
                  height="100%"
                />
              </CardBody>
              <CardFooter className="flex flex-col py-[20px] gap-2 text-small">
                <h3 className="w-full text-xl font-bold text-left">{data.title}</h3>
                <p className="text-base mb-[10px]">{data.short_description}</p>
                <div className="w-full flex flex-row justify-start flex-wrap gap-2">
                  {data.habilities.map((hability: string, index: number) => (
                    <Code color="secondary" size="sm" key={index}>
                      {hability}
                    </Code>
                  ))}
                </div>
                <div className="flex flex-row gap-4 w-full align-end pt-[20px]">
                  <Link href={data.urlWeb} target="_blank" rel="nofollow">
                    <Button color="warning" variant="flat" endContent={<SquareArrowOutUpRightIcon width={15} height={15}/>}>
                      {t('buttons.visit')}
                    </Button>
                  </Link>

                  <Button
                    color="secondary"
                    variant="ghost"
                    onPress={() => handleOpen(data)}
                  >
                    {t('buttons.learn')}
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Componente de paginación */}
      <Pagination
        showShadow
        color="secondary"
        initialPage={1}
        total={totalPages}
        page={currentPage}
        onChange={handlePageChange}
      />

      {/* Modal para mostrar la información del proyecto */}
      {selectedProject && (
        <Modal
          backdrop="blur"
          size={modalSize}
          isDismissable={true}
          isOpen={isOpen}
          onClose={onClose}
          scrollBehavior="outside"
        >
          <ModalContent className="z-100 overflow-auto">
            {(onClose) => (
              <>
                <ModalHeader className="p-0">
                  <Image
                    src={selectedProject.image}
                    className="object-cover"
                    width={900}
                    height="100%"
                    alt={selectedProject.title}
                  />
                </ModalHeader>
                <ModalBody>
                  <div className="pt-[50px]">
                    <h2 className="text-3xl text-[#7828c8] dark:text-[#9455d3] font-bold">
                      {selectedProject.title}
                    </h2>
                    <p className="text-md my-[20px]">
                      {selectedProject.description}
                    </p>
                    <div className="w-full flex flex-row justify-start flex-wrap gap-2">
                      {selectedProject.habilities.map(
                        (hability: string, index: number) => (
                          <Code color="secondary" size="sm" key={index}>
                            {hability}
                          </Code>
                        )
                      )}
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                <Link href={selectedProject.urlWeb} target="_blank" rel="nofollow">
                    <Button color="warning" variant="flat" endContent={<SquareArrowOutUpRightIcon width={15} height={15}/>}>
                      {t('buttons.visit')}
                    </Button>
                  </Link>

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

export default Wordpress;
