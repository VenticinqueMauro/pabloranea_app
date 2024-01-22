'use client';

import { useStore } from "@/store/dashboard";
import { Event } from "@/types/event.type";
import { Chip, Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from "@nextui-org/react";
import dayjs from "dayjs";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";


const ModalDelete = dynamic(() => import("./ModalDelete"), { ssr: false });
const StatusButton = dynamic(() => import("./StatusButton"), { ssr: false });


const columns = [
    { label: 'Title', key: 'title' },
    { label: 'Location', key: 'location' },
    { label: 'Date', key: 'date' },
    { label: 'Time', key: 'time' },
    { label: 'Description', key: 'description' },
    { label: "Status", key: 'status' },
    { label: "Actions", key: 'actions' }
]

export default function EventTable() {

    const {refresh} = useStore();
    const [isFetching, setIsFetching] = useState(true);
    const [allEvents, setAllEvents] = useState<Event[]>([])

    useEffect(() => {

        async function getEvents() {

            try {
                const res = await fetch(`/api/event`)

                if (!res.ok) {
                    console.log('Error al traer los eventos')
                    return;
                }

                const data: Event[] = await res.json();
                setAllEvents(data);
            } catch (error: any) {
                throw new Error(error)
            } finally {
                setIsFetching(false);
            }
        }

        getEvents();

    }, [refresh])


    return (
        <section className="border rounded-lg ">
            <Table
                aria-label="Events Table"
                className="overflow-x-hidden"
                isStriped
                radius="none"
            >
                <TableHeader columns={columns}>
                    {(column) =>
                        <TableColumn
                            key={column.key}
                            className="uppercase"
                        >
                            {column.label}
                        </TableColumn>}
                </TableHeader>
                <TableBody
                    emptyContent={isFetching ? ` ` : allEvents.length === 0 ? 'No events found' : ''}
                    items={allEvents?.length ? allEvents : []}
                    isLoading={isFetching}
                    loadingContent={<Spinner size="sm" label="Loading..." />}
                >
                    {(item) => (
                        <TableRow key={item._id}>
                            {(columnKey) => (
                                <TableCell className="capitalize">
                                    {
                                        columnKey === 'date' ?
                                            <p>{dayjs(item.date).format("DD-MM-YY")}</p>
                                            :
                                            columnKey === 'status' ?
                                                <Chip variant="flat" color={item.status === 'active' ? 'success' : 'warning'}>{item.status}</Chip>
                                                :
                                                columnKey === 'actions' ?
                                                    <div className="flex gap-2">
                                                        <StatusButton id={item._id} status={item.status} />
                                                        <ModalDelete id={item._id} />
                                                    </div>
                                                    :
                                                    getKeyValue(item, columnKey)
                                    }
                                </TableCell>
                            )}
                        </TableRow>
                    )}
                </TableBody>
            </Table >
        </section >
    );
}