'use client';


export default function page() {

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        try {
            const res = await fetch(`https://pabloranea.vercel.app/api/auth/login`, {
                cache: 'no-store',
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: 'admin@admin', password: 'admin123' })
            });

            if (!res.ok) {
                const errorMessage = await res.text();
                console.error('Error:', res.status, errorMessage);
                throw new Error(`Error: ${res.status} - ${errorMessage}`);
            }

            const responseData = await res.json();
            console.log('Success:', responseData);

        } catch (error) {
            // Manejo de errores para problemas de red o errores generales
            console.error('Network error or general error:', error);
        }

    }

    return (
        <form onSubmit={handleSubmit} className="mt-32 border max-w-xl mx-auto flex flex-col items-center">
            <label>
                email
                <input type="email" name='email' className="border" />
            </label>
            <label>
                password
                <input type="password" name='password' className="border" />
            </label>
            <button type="submit">Login</button>
        </form>
    )
}
