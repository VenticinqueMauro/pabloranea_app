'use client';

import { BASE_URL } from "@/utils/enviroments";
import { Button, Card, Input } from "@nextui-org/react";
import { EyeIcon, EyeOffIcon, MailIcon, UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";

export default function LoginForm() {

    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const [data, setData] = useState({ email: '', password: '' });

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }


    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        toast.promise(
            async () => {
                try {
                    const response = await fetch(`${BASE_URL}/api/auth/login`, {
                        method: 'POST',
                        credentials: 'include',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                    });

                    if(response.status === 404){
                        return `Email inválido. Por favor, inténtelo de nuevo.`
                    }

                    if (response.ok) {
                        router.push('/dashboard');
                        return `¡Inicio de sesión exitoso! 😄 ¡Bienvenid@!`;
                    } else {
                        const error = await response.json();

                        if (error.status === 401) {
                            return `Contraseña inválida. Por favor, inténtelo de nuevo.`;
                        }
                        if (error.status === 404) {
                            return `Email inválido. Por favor, inténtelo de nuevo.`;
                        } else {
                            throw new Error(`Oops, algo salió mal en el inicio de sesión. 😕`);
                        }
                    }
                } catch (error) {
                    console.log(error);
                    throw error;
                }
            },
            {
                loading: 'Loading...',
                success: (message) => message,
                error: (error) => error.message,
            }
        );
    };

    return (
        <Card className="max-w-xs p-10 m-auto rounded-xl xl:max-w-lg">
            <h1 className="flex items-center justify-center gap-1 pb-2 text-2xl font-medium text-center md:text-3xl md:gap-2 text-foreground">
                <UserIcon />
                Login
            </h1>
            <form className="flex flex-col items-center justify-center gap-3 " onSubmit={onSubmit}>
                <Input
                    type="email"
                    name="email"
                    id="username"
                    autoComplete="username"
                    isRequired
                    size="lg"
                    label="Email"
                    variant="underlined"
                    placeholder="ejemplo@ejemplo.com"
                    className="max-w-xs"
                    color="default"
                    endContent={<MailIcon />}
                    onChange={handleChange}
                />
                <Input
                    label="Password"
                    name="password"
                    id="current-password"
                    autoComplete="current-password"
                    isRequired
                    size="lg"
                    variant="underlined"
                    placeholder="Enter your password"
                    color="default"
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                            {isVisible ? (
                                <EyeIcon />
                            ) : (
                                <EyeOffIcon />
                            )}
                        </button>
                    }
                    type={isVisible ? "text" : "password"}
                    className="max-w-xs "
                    onChange={handleChange}
                />
                <Button type="submit" className="w-full mt-2" variant="solid" color="default" >Login</Button>
            </form>
        </Card>
    )
}
