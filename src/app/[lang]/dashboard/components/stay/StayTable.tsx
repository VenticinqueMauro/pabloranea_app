'use client';

import { useStore } from "@/store/dashboard";
import { Stay } from "@/types/stay.type";
import { Spinner, Tab, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tabs, getKeyValue } from "@nextui-org/react";
import dayjs from "dayjs";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


const ModalEdit = dynamic(() => import("./ModalEdit"), { ssr: false });
const ModalDelete = dynamic(() => import("./ModalDelete"), { ssr: false });


const columns = [
    { label: 'Location', key: 'location' },
    { label: 'Start date', key: 'startDate' },
    { label: 'End date', key: 'endDate' },
    // { label: 'Events', key: 'eventsLenght' },
    { label: 'Description', key: 'description' },
    // { label: "Color", key: 'color' },
    { label: "Actions", key: 'actions' }
]

export default function StayTable() {

    const { refresh } = useStore();
    const [isFetching, setIsFetching] = useState(true);
    const [allStays, setAllStays] = useState<Stay[]>([])

    const pathname = usePathname();


    useEffect(() => {

        async function getEvents() {

            try {
                const res = await fetch(`/api/stay`)

                if (!res.ok) {
                    console.log('Error al traer las estadias')
                    return;
                }

                const data: Stay[] = await res.json();
                setAllStays(data);
            } catch (error: any) {
                throw new Error(error)
            } finally {
                setIsFetching(false);
            }
        }

        getEvents();

    }, [refresh])


    return (
        <section className="border rounded-lg overflow-y-scroll max-h-[700px]">
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
                    emptyContent={isFetching ? ` ` : allStays.length === 0 ? 'No stays found' : ''}
                    items={allStays?.length ? allStays : []}
                    isLoading={isFetching}
                    loadingContent={<Spinner size="sm" label="Loading..." />}
                >
                    {(item) => (
                        <TableRow key={item._id}>
                            {(columnKey) => (
                                <TableCell className="capitalize">
                                    {
                                        // columnKey === 'eventsLenght' ?
                                        //     <p>{item?.events?.length}</p>
                                        //     :
                                        columnKey === 'startDate' ?
                                            <p>
                                                {dayjs(item.startDate).add(1, 'day').format('DD-MM-YY')}
                                            </p>
                                            :
                                            columnKey === 'endDate' ?
                                                <p>
                                                    {dayjs(item.endDate).add(1, 'day').format('DD-MM-YY')}
                                                </p>
                                                :
                                                columnKey === 'description' ?
                                                    <Tabs
                                                        aria-label='options'
                                                        size="sm"
                                                    >
                                                        <Tab key='en' title='EN'>
                                                            <p className="max-w-[250px] line-clamp-5 whitespace-pre-line">
                                                                {item.description.en}
                                                            </p>
                                                        </Tab>
                                                        <Tab key='es' title='ES'>
                                                            <p className="max-w-[250px] line-clamp-5 whitespace-pre-line">
                                                                {item.description.es}
                                                            </p>
                                                        </Tab>
                                                    </Tabs>
                                                    :
                                                    // columnKey === 'color' ?
                                                    //     <p
                                                    //         className="w-5 h-5 rounded-full inline-block shadow"
                                                    //         style={{ background: `${item.color}` }}>

                                                    //     </p>
                                                    //     :
                                                    columnKey === 'actions' ?
                                                        <div className="flex gap-2">
                                                            <ModalEdit id={item._id} />
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