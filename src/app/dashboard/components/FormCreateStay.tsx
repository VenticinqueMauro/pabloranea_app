'use client';

import { Button, Card, Input } from '@nextui-org/react';
import { Calendar, MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const FormCreateStay = () => {

    const router = useRouter()

    const [bookingData, setBookingData] = useState({
        location: '',
        startDate: '',
        endDate: '',
        color: '#CCCCCC',
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
            const res = await fetch('/api/reservation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json'
                },
                body: JSON.stringify(bookingData)
            });

            if (res.ok) {
                const data = await res.json();
                console.log(data);
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
                    location: '',
                    startDate: '',
                    endDate: '',
                    color: '#ffffff',
                    status: 'active',
                })
        }
    };


    return (
        <Card>
            <form onSubmit={handleSubmit} className='max-w-sm flex flex-col gap-2 p-5 border rounded-md '>
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
