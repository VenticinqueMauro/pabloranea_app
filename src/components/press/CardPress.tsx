'use client';
import { Button } from '@nextui-org/react';
import { Calendar } from 'lucide-react';
import React, { useRef, useState } from 'react';

const CardPress = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || isFocused) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='relative flex items-center justify-center overflow-hidden'
        >
            <div
                className='pointer-events-none absolute -inset-px opacity-0 transition duration-300'
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(182, 182, 182, 0.1), transparent 40%)`,
                }}
            ></div>
                <div className='border max-w-[250px]'>
                    <div className="mx-5 py-4 space-y-2 ">
                        <p className='font-bold'>Press Release Title</p>
                        <p className="text-sm flex gap-1 items-center">
                            <Calendar size={14} />
                            02.02.24
                        </p>
                    </div>
                    <div className="grid gap-4 border-y py-4 mx-5">
                        <p className="text-sm/relaxed line-clamp-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores recusandae cupiditate tenetur libero dicta eligendi.</p>
                    </div>
                    <div className="bg-gray-100 py-4 ">
                        <Button size="sm" radius="none" className="bg-black text-white mx-5 font-semibold">Read More</Button>
                    </div>
                </div>
            
        </div>
    );
};

export default CardPress;
