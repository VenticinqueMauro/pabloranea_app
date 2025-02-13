'use client';

import { useStore } from "@/store/dashboard";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { TrashIcon } from "lucide-react";
import { toast } from "sonner";

interface Props {
    id: string,
}

export default function ModalDelete({ id }: Props) {

    const { setRefresh } = useStore();

    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    const handleDelete = async () => {

        toast.promise(
            async () => {
                try {
                    const response = await fetch(`/api/stay/${id}`, {
                        method: 'DELETE',
                    })

                    if (response.ok) {
                        setRefresh();
                        return `Stay deleted successfully ♻️`;
                    } else {
                        throw new Error(`Oops, algo salió mal 😕`);
                    }
                } catch (error: any) {
                    throw new Error('Error al procesar la solicitud: ' + error.message);
                }
            },
            {
                loading: "Loading...",
                success: (message) => message,
                error: (error) => error.message,
            }
        )
    }

    return (
        <>
            <Button isIconOnly onPress={onOpen} color="danger" size="sm" radius="full" variant="flat">
                <TrashIcon size={16} />
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton={true}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 uppercase">⚠️ Warning</ModalHeader>
                            <ModalBody>
                                <div>
                                    This action is permanent and cannot be undone. Are you sure you want to continue?
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={() => {
                                    handleDelete();
                                    onClose();
                                }}>
                                    Delete
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}