'use client';

import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import dayjs from "dayjs";
import { animate, motion } from "framer-motion";
import { MapPinned, Plane, PlaneLanding, PlaneTakeoff } from "lucide-react";


export default function ModalCalendar({ day, staysForDate }: any) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const hasEvents = staysForDate?.events && staysForDate?.events?.some((event: any) => dayjs(event.date).date() === day);


    return (
        <>
            <p onClick={onOpen} style={{ position: 'relative' }}>
                {day}
                {hasEvents && (
                    <span className="h-2 w-2 rounded-full inline-block absolute bg-blue-600 border-blue-200 -top-1 right-0 animate-bounce"></span>
                )}
            </p>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <motion.p initial={{ x: -20 }} animate={{ x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-xl uppercase flex gap-1 items-center">
                                    <Plane size={20} />
                                    tour stay information
                                </motion.p>
                            </ModalHeader>
                            <ModalBody>
                                <motion.p className="flex gap-2 items-center" initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                                    <MapPinned size={20} />
                                    {staysForDate?.location}
                                </motion.p>
                                <motion.p className="flex gap-2 items-center" initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                                    <PlaneLanding size={20} />
                                    {dayjs(staysForDate?.startDate).format('dddd, MM YYYY.')}
                                </motion.p>
                                <motion.p className="flex gap-2 items-center" initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                                    <PlaneTakeoff size={20} />
                                    {dayjs(staysForDate?.endDate).format('dddd, MM YYYY.')}
                                </motion.p>
                                {staysForDate?.events && staysForDate.events.length > 0 && (
                                    <>
                                        <motion.p className="flex gap-2 items-center" initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
                                            Event details:
                                        </motion.p>
                                        {staysForDate.events.map((event: any) => (
                                            <motion.p key={event._id} className="flex gap-2 items-center" initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
                                                {event.title} on {dayjs(event.date).format('dddd, MM YYYY')} at {event.time}
                                            </motion.p>
                                        ))}
                                    </>
                                )}
                            </ModalBody>
                            <ModalFooter>

                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal >
        </>
    );
}
