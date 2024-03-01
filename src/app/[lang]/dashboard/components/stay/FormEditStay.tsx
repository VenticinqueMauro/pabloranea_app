'use client';

import { useStore } from '@/store/dashboard';
import { Button, Card, Input, Tab, Tabs, Textarea } from '@nextui-org/react';
import { MapPin, Palmtree } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

const FormEditStay = ({ id, color }: any) => {

    const { setRefresh } = useStore();
    const [bookingData, setBookingData] = useState({
        location: '',
        startDate: '',
        endDate: '',
        color: '#CCCCCC',
        description: {
            en: '',
            es: ''
        },
        status: '',
    });


    useEffect(() => {
    }, [id, color])


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === 'en' || name === 'es') {
            setBookingData(prevData => ({
                ...prevData,
                description: {
                    ...prevData.description,
                    [name]: value
                }
            }));
        } else {
            setBookingData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        toast.promise(async () => {
            try {
                const res = await fetch(`/api/stay/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'Application/json'
                    },
                    body: JSON.stringify(bookingData)
                });

                if (res.ok) {
                    await res.json();
                    setRefresh();
                    return `Stay edited successfully 😎`;
                } else {
                    const errorData = await res.json();
                    console.log(errorData.message);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setBookingData(
                    {
                        location: '',
                        startDate: '',
                        endDate: '',
                        description: {
                            en: '',
                            es: ''
                        },
                        color: '#ffffff',
                        status: 'active',
                    })
            }
        }, {
            loading: "Loading...",
            success: (message) => message,
            error: (error) => error.message,
        })

    };


    return (
        <Card>
            <form onSubmit={handleSubmit} className='max-w-sm flex flex-col gap-2 p-5 border rounded-md '>
                <h2 className='text-center font-medium text-lg flex gap-1 items-center justify-center'>
                    <Palmtree size={20} />
                    Edit tour Stay
                </h2>
                <div>
                    <Input
                        type="text"
                        id="location"
                        name="location"
                        label="Location"
                        endContent={<MapPin size={16} />}
                        placeholder='New York city'
                        value={bookingData.location}
                        onChange={handleInputChange}

                    />
                </div>
                <div>
                    <label>
                        <Input
                            type="date"
                            id="startDate"
                            name="startDate"
                            label='Start Date'
                            placeholder='Start Date'
                            value={bookingData.startDate}
                            onChange={handleInputChange}

                        />
                    </label>
                </div>
                <div>
                    <label>
                        <Input
                            type="date"
                            id="endDate"
                            name="endDate"
                            label='End Date'
                            placeholder='End Date'
                            value={bookingData.endDate}
                            onChange={handleInputChange}

                        />
                    </label>
                </div>
                <Tabs
                    aria-label='options'
                >
                    <Tab key='en' title='EN'>
                        <Textarea
                            label="Description"
                            placeholder="Enter your description"
                            className="max-w-md"
                            name='en'
                            value={bookingData.description.en}
                            onChange={(handleInputChange)}
                        />
                    </Tab>
                    <Tab key='es' title='ES'>
                        <Textarea
                            label="Descripción"
                            placeholder="Ingresá tu descripción"
                            className="max-w-md"
                            name='es'
                            value={bookingData.description.es}
                            onChange={handleInputChange}
                        />
                    </Tab>
                </Tabs>
                <div>
                    <Input
                        type="color"
                        id="color"
                        name="color"
                        label='Select Color'
                        value={bookingData.color}
                        onChange={handleInputChange}

                    />
                </div>
                <Button
                    type="submit"
                    color='primary'
                    className='font-medium'
                >Edit
                </Button>
            </form>
        </Card>
    );
};

export default FormEditStay;
