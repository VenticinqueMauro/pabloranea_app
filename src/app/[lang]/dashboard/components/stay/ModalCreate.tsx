'use client';

import { Button, Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/react";
import { Palmtree } from "lucide-react";
import FormCreateStay from "./FormCreateStay";

export default function ModalCreate() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onOpen} className="bg-black text-white font-medium" startContent={<Palmtree size={20} />}>Create stay</Button>
            <Modal isOpen={isOpen} size="md" onOpenChange={onOpenChange} className="bg-transparent shadow-none" hideCloseButton={true}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody>
                                <FormCreateStay />
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
