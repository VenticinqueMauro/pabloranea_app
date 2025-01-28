'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HandleLanguageSelection() {
    const router = useRouter();
    const [loading, setLoading] = useState<string | null>(null);

    const handleLanguageSelection = async (lang: string) => {
        setLoading(lang);
        localStorage.setItem("preferredLang", lang);
        
        // Add a small delay to show the loading state
        await new Promise(resolve => setTimeout(resolve, 100));
        router.push(`/${lang}`);
    };

    return (
        <>
            {/* Full Screen Loader */}
            {loading && (
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    backgroundColor: '#fff',
                    zIndex: 50,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'opacity 0.3s ease-in-out',
                }}>
                    {/* Elegant Loading Animation */}
                    <div style={{ position: 'relative', width: '8rem', height: '8rem' }}>
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            borderTop: '2px solid #000',
                            borderRight: '2px solid #000',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite'
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            inset: '0.5rem',
                            borderTop: '2px solid #000',
                            borderLeft: '2px solid #000',
                            borderRadius: '50%',
                            animation: 'spin 1.5s linear infinite'
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            inset: '1rem',
                            borderTop: '2px solid #000',
                            borderRadius: '50%',
                            animation: 'spin 2s linear infinite'
                        }}></div>
                    </div>
                    {/* Loading Text */}
                    <p style={{
                        marginTop: '2rem',
                        fontSize: '0.875rem',
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        color: '#000',
                        fontFamily: 'Aileron-Light',
                    }}>
                        {loading === 'en' ? 'Loading...' : 'Cargando...'}
                    </p>
                </div>
            )}

            <div style={{
                position: 'fixed',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
            }}>
                {/* Welcome Text */}
                <div style={{ textAlign: 'center', marginBottom: '4rem', padding: '0 1rem' }}>
                    <h1 style={{
                        fontFamily: 'Aileron',
                        fontSize: '2rem',
                        marginBottom: '1.5rem',
                        letterSpacing: '0.2em',
                        fontWeight: 300,
                        color: '#000',
                    }}>
                        PABLO RANEA
                    </h1>
                    <p style={{
                        fontFamily: 'Aileron-Light',
                        fontSize: '0.875rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: '#666',
                    }}>
                        Select your language • Selecciona tu idioma
                    </p>
                </div>

                {/* Language Buttons */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    width: '100%',
                    maxWidth: '20rem',
                    padding: '0 1rem',
                }}>
                    <button
                        onClick={() => handleLanguageSelection("en")}
                        disabled={loading !== null}
                        style={{
                            width: '100%',
                            padding: '1rem 2rem',
                            backgroundColor: '#fff',
                            border: '2px solid #000',
                            color: '#000',
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em',
                            fontFamily: 'Aileron-Light',
                            fontSize: '1rem',
                            cursor: loading === null ? 'pointer' : 'not-allowed',
                            transition: 'all 0.3s ease-in-out',
                            opacity: loading === "en" ? 0.5 : 1,
                        }}
                    >
                        English
                    </button>
                    <button
                        onClick={() => handleLanguageSelection("es")}
                        disabled={loading !== null}
                        style={{
                            width: '100%',
                            padding: '1rem 2rem',
                            backgroundColor: '#000',
                            border: '2px solid #000',
                            color: '#fff',
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em',
                            fontFamily: 'Aileron-Light',
                            fontSize: '1rem',
                            cursor: loading === null ? 'pointer' : 'not-allowed',
                            transition: 'all 0.3s ease-in-out',
                            opacity: loading === "es" ? 0.5 : 1,
                        }}
                    >
                        Español
                    </button>
                </div>

                {/* Footer Text */}
                <p style={{
                    marginTop: '4rem',
                    fontSize: '0.75rem',
                    letterSpacing: '0.15em',
                    textAlign: 'center',
                    color: '#999',
                    fontFamily: 'Aileron-Light',
                    padding: '0 1rem',
                }}>
                    Chef • Sommelier • Gastronomic Experiences
                </p>
            </div>
        </>
    );
}
