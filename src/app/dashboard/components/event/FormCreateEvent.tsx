'use client';

import { Button, Card, Input, Textarea } from '@nextui-org/react';
import { Calendar, MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const FormCreateEvent = () => {

    const router = useRouter()

    const [bookingData, setBookingData] = useState({
        title: '',
        location: '',
        date: '',
        time: '',
        description: '',
        status: 'active',
    });


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBookingData({
            ...bookingData,
            [name]: value,
        });
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/event', {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json'
                },
                body: JSON.stringify(bookingData)
            });

            if (res.ok) {
                const data = await res.json();
                router.refresh();
            } else {
                const errorData = await res.json();
                console.log(errorData.message);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setBookingData(
                {
                    title: '',
                    location: '',
                    date: '',
                    time: '',
                    description: '',
                    status: 'active',
                })
        }
    };


    return (
        <Card>
            <form onSubmit={handleSubmit} className='max-w-sm flex flex-col gap-2 p-5 border rounded-md '>
                <h2 className='text-center font-medium text-lg flex gap-1 items-center justify-center'>
                    <Calendar size={20} />
                    Create event
                </h2>
                <div>
                    <Input
                        type="text"
                        id="title"
                        name="title"
                        label="Title"
                        endContent={<MapPin size={16} />}
                        placeholder='Title'
                        value={bookingData?.title}
                        onChange={handleInputChange}
                        isRequired
                    />
                </div>
                <div>
                    <Input
                        type="text"
                        id="location"
                        name="location"
                        label="Location"
                        endContent={<MapPin size={16} />}
                        placeholder='New York city'
                        value={bookingData?.location}
                        onChange={handleInputChange}
                        isRequired
                    />
                </div>
                <div>
                    <label>
                        <Input
                            type="date"
                            id="date"
                            name="date"
                            label='Start Date'
                            placeholder='Start Date'
                            value={bookingData?.date}
                            onChange={handleInputChange}
                            isRequired
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <Input
                            type="time"
                            id="time"
                            name="time"
                            label='Start time'
                            placeholder='Start time'
                            value={bookingData?.time}
                            onChange={handleInputChange}
                            isRequired
                        />
                    </label>
                </div>
                <div>
                    <Textarea
                        label="Description"
                        name='description'
                        placeholder="Enter your description"
                        className="max-w-xs"
                        value={bookingData?.description}
                        onChange={handleInputChange}
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

export default FormCreateEvent;
