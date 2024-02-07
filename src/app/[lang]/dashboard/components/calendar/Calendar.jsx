'use client';

import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Card } from '@nextui-org/react';
import dynamic from 'next/dynamic';

const TooltipCalendar = dynamic(() => import('./TooltipCalendar'));

const Calendar = ({ stays }) => {
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [staysByDate, setStaysByDate] = useState({});

    useEffect(() => {
        const staysMap = {};

        stays?.forEach((stay) => {
            const startDate = dayjs(stay.startDate);
            const endDate = dayjs(stay.endDate);

            let currentDate = startDate;
            while (currentDate.isBefore(endDate.add(1, 'day'), 'day')) {
                const dateString = currentDate.format('YYYY-MM-DD');
                if (!staysMap[dateString]) {
                    staysMap[dateString] = [];
                }
                staysMap[dateString].push(stay);
                currentDate = currentDate.add(1, 'day');
            }
        });

        setStaysByDate(staysMap);
    }, [stays]);


    const goToMonth = (modifier) => {
        setSelectedDate(selectedDate.add(modifier, 'month'));
    };

    const renderDay = (day) => {
        const currentDate = selectedDate.date(day - 1);
        const dateString = currentDate.format('YYYY-MM-DD');
        const staysForDate = staysByDate[dateString] || [];
        const backgroundColor = staysForDate.length > 0 ? staysForDate[0].color : '';
        const cursorStyle = staysForDate.length > 0 ? 'pointer' : 'default';

        return (
            <div
                key={day}
                className={`text-center py-2 px-1 border rounded-md bg-white`}
                style={{
                    background: backgroundColor,
                    cursor: cursorStyle,
                }}
            >
                {
                    staysForDate.length ?
                        <TooltipCalendar day={day} staysForDate={staysForDate[0]} />
                        :
                        <p>{day}</p>
                }
            </div>
        );
    };

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <Card className="container max-w-sm border  p-5  bg-gradient-to-r from-gray-50 to-white">
            <div className="flex items-center justify-between mb-4">
                <button className="px-2 py-1  rounded" onClick={() => goToMonth(-1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" /></svg>
                </button>
                <div>
                    <div className="text-xl font-bold text-center">{selectedDate.format('MMMM')}</div>
                    <div className="text-sm">{selectedDate.format('dddd')} {selectedDate.format('DD')} {selectedDate.format('YYYY')}</div>
                </div>
                <button className="px-2 py-1 rounded" onClick={() => goToMonth(1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                </button>
            </div>
            <div className="grid grid-cols-7 gap-1">
                {daysOfWeek.map((day, index) => (
                    <div key={index} className="text-xs lg:text-sm text-center py-2 px-1 mb-1 border rounded-md shadow bg-gray-100">
                        {day}
                    </div>
                ))}
                {Array.from({ length: selectedDate.startOf('month').day() }).map((_, index) => (
                    <div key={index}></div>
                ))}
                {Array.from({ length: selectedDate.daysInMonth() }).map((_, index) => renderDay(index + 1))}
            </div>
        </Card>
    );
};

export default Calendar;
