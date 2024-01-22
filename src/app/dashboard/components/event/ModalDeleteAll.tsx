'use client';

import { useStore } from "@/store/dashboard";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ModalDeleteAll() {

    const { setRefresh } = useStore();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [value, setValue] = useState('')


    const handleDeleteAll = async () => {

        toast.promise(
            async () => {
                try {
                    const response = await fetch(`/api/event`, {
                        method: 'DELETE',
                    })

                    if (response.ok) {
                        setRefresh();
                        return `All events deleted successfully ♻️`;
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
            <Button
                onPress={onOpen}
                color="danger"
                variant='flat'
                className="font-medium"
                startContent={<Trash size={20} />}>Delete all events</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton={true}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 uppercase">⚠️ Warning</ModalHeader>
                            <ModalBody>
                                <div>
                                    This action is permanent and cannot be undone. Are you sure you want to continue?
                                </div>
                                <label>
                                    Enter <span className="font-medium text-danger">deleteall</span> to confirm deletion:
                                    <Input
                                        size='sm'
                                        variant="faded"
                                        name="key"
                                        value={value.toLowerCase()}
                                        onValueChange={(newValue) => setValue(newValue.toLowerCase())}
                                    />
                                </label>

                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose} >
                                    Close
                                </Button>
                                <Button
                                    isDisabled={value !== 'deleteall'}
                                    color="primary"
                                    onPress={() => {
                                        handleDeleteAll();
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