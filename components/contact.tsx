"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Form,
  Textarea,
  HeroUIProvider,
} from "@heroui/react";
import { Mail } from "lucide-react";

const ContactForm = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "a538bd8b-f5fe-4678-9500-a88b53d930e0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      console.log(result);
      setIsSubmitted(true);
    }
  }

  return (
    <HeroUIProvider>
      <div className="px-3 transition duration-150 rounded-full cursor-pointer hover:bg-[#7828c8] dark:hover:bg-[#9455d3]">
        <Mail onClick={onOpen} strokeWidth={1} size={25} />
      </div>
      <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {isSubmitted ? "¡Gracias!" : "Contáctame"}
              </ModalHeader>
              <ModalBody>
                {isSubmitted ? (
                  <p className="text-center text-lg">
                    Tu mensaje ha sido enviado con éxito.<br/>Me pondré en contacto contigo lo más pronto posible para ayudarte.
                  </p>
                ) : (
                  <Form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
                    <Input
                      isRequired
                      errorMessage="Por favor ingresa un nombre válido"
                      label="Nombre"
                      labelPlacement="outside"
                      name="nombre"
                      placeholder="Nombre Completo"
                      type="text"
                      variant="bordered"
                    />

                    <Input
                      isRequired
                      errorMessage="Por favor ingresa un correo válido"
                      label="Correo Electrónico"
                      labelPlacement="outside"
                      name="email"
                      placeholder="Ingresa tu correo electrónico"
                      type="email"
                      variant="bordered"
                    />
                    <Textarea 
                      label="¿Cómo puedo ayudarte?"
                      labelPlacement="outside"
                      variant="bordered"
                      name="mensaje"
                    />
                    <div className="flex gap-2">
                      <Button color="secondary" variant="ghost" type="submit">
                        Enviar
                      </Button>
                      <Button color="danger" variant="light" onPress={onClose}>
                      {isSubmitted ? "Cerrar" : "Cancelar"}
                      </Button>
                    </div>
                  </Form>
                )}
              </ModalBody>
              <ModalFooter>
                
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </HeroUIProvider>
  );
};

export default ContactForm;
