'use client';

import { useStore } from '@/store/dashboard';
import { Button, Card, Input, Tab, Tabs, Textarea } from '@nextui-org/react';
import { Calendar, MapPin } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'sonner';

const FormCreateStay = () => {

    const { setRefresh } = useStore();

    const [bookingData, setBookingData] = useState({
        location: '',
        startDate: '',
        endDate: '',
        description: {
            en: '',
            es: ''
        },
        color: '#CCCCCC',
    });


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === 'en' || name === 'es') {
            setBookingData({
                ...bookingData,
                description: {
                    ...bookingData.description,
                    [name]: value
                }
            })
        } else {
            setBookingData({
                ...bookingData,
                [name]: value.toLowerCase()
            });
        }
    }




    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (bookingData.startDate > bookingData.endDate) {
            return toast.error('Ending date is better than starting date 😞')
        }

        toast.promise(async () => {
            try {
                const res = await fetch('/api/stay', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'Application/json'
                    },
                    body: JSON.stringify(bookingData)
                });

                if (res.ok) {
                    await res.json();
                    setRefresh();
                    return `Stay created successfully 😎`;
                } else {
                    const errorData = await res.json();
                    toast.error(errorData.message);
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
            <form onSubmit={handleSubmit} className='max-w-sm flex flex-col gap-2 p-5 rounded-md space-y-1'>
                <h2 className='text-center font-medium text-lg flex gap-1 items-center justify-center'>
                    <Calendar size={20} />
                    Create tour stay
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
                        isRequired
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
                            isRequired
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
                            isRequired
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
                        isRequired
                    />
                </div>
                <Button
                    type="submit"
                    color='primary'
                    className='font-medium'
                >Create
                </Button>
            </form>
        </Card>
    );
};

export default FormCreateStay;
