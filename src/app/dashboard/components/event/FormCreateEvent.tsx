'use client';

import { Button, Card, Checkbox, Input, Select, SelectItem, Selection, Textarea } from '@nextui-org/react';
import { BookA, MapPin, UtensilsCrossed } from 'lucide-react';
import { useState } from 'react';

interface Props {
    locations: string[]
}

const FormCreateEvent = ({ locations }: Props) => {


    const [newLocation, setNewLocation] = useState(false)
    const [value, setValue] = useState<Selection>(new Set([]));

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
            [name]: value.toLowerCase(),
        });
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let dataForm = bookingData;

        if (!newLocation) {
            const stringValue = Array.from(value).join(', ');

            dataForm = {
                ...bookingData,
                location: stringValue.toLowerCase()
            }
        }

        try {
            const res = await fetch('/api/event', {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json'
                },
                body: JSON.stringify(dataForm)
            });

            if (res.ok) {
                await res.json();
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
            <form onSubmit={handleSubmit} className='max-w-sm flex flex-col gap-2 p-5 border rounded-md space-y-1'>
                <h2 className='text-center font-medium text-lg flex gap-1 items-center justify-center'>
                    <UtensilsCrossed size={20} />
                    Create event
                </h2>
                <Checkbox
                    isSelected={newLocation}
                    onValueChange={() => {
                        setNewLocation(!newLocation);
                        setValue(new Set([]));
                    }}
                >
                    Do you need a new location?
                </Checkbox>
                <div className='flex gap-2 items-center'>
                    <Input
                        type="text"
                        id="title"
                        name="title"
                        label="Title"
                        endContent={<BookA size={16} />}
                        placeholder='Title'
                        value={bookingData?.title}
                        onChange={handleInputChange}
                        isRequired
                    />
                    <div className='w-full'>
                        {
                            !newLocation ?
                                <Select
                                    label="Stay Location"
                                    variant="bordered"
                                    placeholder="Select location"
                                    disabled={bookingData?.location.length > 0}
                                    isRequired
                                    selectedKeys={value}
                                    onSelectionChange={setValue}
                                >
                                    {locations.map((location) => (
                                        <SelectItem key={location} value={location}>
                                            {location}
                                        </SelectItem>
                                    ))}
                                </Select>
                                :
                                <Input
                                    type="text"
                                    id="location"
                                    name="location"
                                    label="New location"
                                    endContent={<MapPin size={16} />}
                                    placeholder='New York city'
                                    disabled={value instanceof Set && value.size > 0}
                                    value={bookingData?.location}
                                    onChange={handleInputChange}
                                />
                        }
                    </div>
                </div>
                <div className='flex gap-2 items-center w-full justify-between'>
                    <label className='w-full'>
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
                    <label className='w-full'>
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
                        className=""
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
            </form >
        </Card >
    );
};

export default FormCreateEvent;
