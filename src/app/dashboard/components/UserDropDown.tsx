'use client';

import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User } from "@nextui-org/react";
import { LogOutIcon } from "lucide-react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { toast } from "sonner";

interface User {
    fullname: string,
    email: string,
}

export default function UserDropdown() {

    const router = useRouter();

    const [user, setUser] = useState<User>()

    // useEffect(() => {
    //     const isAuthenticate = async () => {

    //         try {
    //             const res = await fetch('/api/auth/authenticate')

    //             const { data }: { data: User } = await res.json();

    //             setUser(data);

    //         } catch (error) {
    //             console.log('error')
    //             redirect('/login')
    //         }
    //     }
    //     isAuthenticate()
    // }, [])


    const signOut = async () => {
        toast.promise(
            async () => {
                try {
                    const response = await fetch(`/api/auth/logout`);
                    if (response.ok) {
                        setTimeout(() => {
                            router.push('/');
                        }, 1000);
                        return `¡Hasta pronto! 👋`;
                    } else {
                        throw new Error(`Oops, algo salió mal en el cierre de sesión. 😕`);
                    }
                } catch (error: any) {
                    throw new Error(error.message);
                }
            },
            {
                loading: 'Loading...',
                success: (message) => message,
                error: (error) => error.message,
            })
    }

    return (
        <div className="absolute bottom-10">
            <div className="flex items-center gap-4 ">
                <Dropdown placement="bottom-start">
                    <DropdownTrigger aria-label={`Perfil de ${user?.fullname}`}>
                        <User
                            as="button"
                            avatarProps={{
                                isBordered: true,
                                src: "/userIcon.svg",
                            }}
                            className="transition-transform"
                            description={user?.email ?? 'ejemplo@ejemplo.com'}
                            name={user?.fullname ?? 'Pablo Ranea'}
                            aria-label={`Usuario: ${user?.fullname ?? 'Balcanes'}, correo electrónico: ${user?.email ?? ''}`}
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="User Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-semibold">Bienvenidx 😀</p>
                            {
                                user &&
                                <p className="font-semibold ">{user?.fullname}</p>
                            }
                        </DropdownItem>
                        <DropdownItem >
                            <Link href={'/'}>
                                Ir al sitio web
                            </Link>
                        </DropdownItem>
                        <DropdownItem >
                            <Link href={'/dashboard/changepassword'}>
                                Cambiar contraseña
                            </Link>
                        </DropdownItem>
                        <DropdownItem key="logout" color="danger" className="text-danger" variant="flat">
                            <span
                                className="flex gap-1"
                                onClick={signOut}>
                                <LogOutIcon />
                                Salir
                            </span>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
    );
}