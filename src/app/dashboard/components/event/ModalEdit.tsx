'use client';

import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { EditIcon } from "lucide-react";
import FormEditStay from "../stay/FormEditStay";

interface Props {
    id: string;
}

export default function ModalEdit({ id }: Props) {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onOpen} size="sm" radius="full" isIconOnly color="default" variant="flat" aria-label="edit">
                <EditIcon size={16} />
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="sm" backdrop="blur" hideCloseButton={true} >
                <ModalContent className="bg-transparent shadow-none">
                    {(onClose) => (
                        <>
                            <ModalBody>
                                <FormEditStay onClose={onClose} id={id} />
                            </ModalBody>
                            <ModalFooter></ModalFooter>
                        </>
                    )}
                </ModalContent>

            </Modal>
        </>
    );
}