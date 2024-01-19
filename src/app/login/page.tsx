
export default function page() {

    const handleSubmit = async () => {
        'use server'

        try {
            const res = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: 'admin@admin', password: 'admin123' })
            });

            if (!res.ok) {
                // Si la respuesta no es exitosa (código de estado no está en el rango 200), maneja el error aquí
                const errorMessage = await res.text();
                console.error('Error:', res.status, errorMessage);
                // Puedes lanzar una excepción si quieres que se maneje en el bloque catch exterior
                throw new Error(`Error: ${res.status} - ${errorMessage}`);
            }

            // Procede con la lógica que sigue después de una respuesta exitosa
            // Por ejemplo, puedes obtener y usar datos de la respuesta
            const responseData = await res.json();
            console.log('Success:', responseData);

        } catch (error) {
            // Manejo de errores para problemas de red o errores generales
            console.error('Network error or general error:', error);
        }

    }

    return (
        <form action={handleSubmit} className="mt-32 border max-w-xl mx-auto flex flex-col items-center">
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
