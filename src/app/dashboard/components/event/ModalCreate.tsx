'use client';

import { Button, Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/react";
import { UtensilsCrossed } from "lucide-react";
import FormCreateEvent from "./FormCreateEvent";

interface Props {
    locations: string[]
}

export default function ModalCreate({ locations }: Props) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onOpen} className="bg-black text-white font-medium" startContent={<UtensilsCrossed size={20} />}>Create Event</Button>
            <Modal isOpen={isOpen} size="sm" onOpenChange={onOpenChange} className="bg-transparent shadow-none" hideCloseButton={true}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody>
                                <FormCreateEvent locations={locations} />
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
