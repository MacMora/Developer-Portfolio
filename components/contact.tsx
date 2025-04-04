/*"use client";
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
import useTranslation from "@/hooks/use-translation";

const ContactForm = () => {

  const { t } = useTranslation();

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
                {isSubmitted ? t('contact.title_2') : t('contact.title_1')}
              </ModalHeader>
              <ModalBody>
                {isSubmitted ? (
                  <p className="text-center text-lg">
                    {t('contact.message')}
                  </p>
                ) : (
                  <Form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
                    <Input
                      isRequired
                      errorMessage={t('contact.form.name_error')}
                      label={t('contact.form.name_label')}
                      labelPlacement="outside"
                      name="nombre"
                      placeholder={t('contact.form.name_placeholder')}
                      type="text"
                      variant="bordered"
                    />

                    <Input
                      isRequired
                      errorMessage={t('contact.form.email_error')}
                      label={t('contact.form.email_label')}
                      labelPlacement="outside"
                      name="email"
                      placeholder={t('contact.form.email_placeholder')}
                      type="email"
                      variant="bordered"
                    />
                    <Textarea 
                      label={t('contact.form.textarea_label')}
                      labelPlacement="outside"
                      variant="bordered"
                      name="mensaje"
                    />
                    <div className="flex gap-2">
                      <Button color="secondary" variant="ghost" type="submit">
                        {t('buttons.submit')}
                      </Button>
                      <Button color="danger" variant="light" onPress={onClose}>
                      {isSubmitted ? t('buttons.close') : t('buttons.cancel')}
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

export default ContactForm;*/
