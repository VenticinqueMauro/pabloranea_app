// Tour calendar. Edit here: both the calendar section and the Event
// structured data (src/lib/jsonld.ts) read from this file.

export type Stay = {
    startDate: string;
    endDate: string;
    location: {
        en: string;
        es: string;
    };
    special?: false;
};

export type SpecialStay = {
    special: true;
    date: string;
    location: {
        en: string;
        es: string;
    };
    description?: {
        en: string;
        es: string;
    };
    link?: string;
    linkLabel?: {
        en: string;
        es: string;
    };
};

export type CalendarItem = Stay | SpecialStay;

export type ArchivedStay = Stay;

export const stays: CalendarItem[] = [
    {
        special: true,
        date: '2026-03-22',
        location: {
            en: 'Los Angeles, USA',
            es: 'Los Ángeles, EE.UU.'
        },
        description: {
            en: '"World Asado Day" - Event at Fuegos LA',
            es: '"World Asado Day" - Evento en Fuegos LA'
        }
    },
    {
        startDate: '2026-03-30',
        endDate: '2026-04-13',
        location: {
            en: 'Los Angeles & Palm Springs, USA',
            es: 'Los Ángeles & Palm Springs, EE.UU.'
        }
    },
    {
        startDate: '2026-04-14',
        endDate: '2026-04-27',
        location: {
            en: 'Texas, USA',
            es: 'Texas, EE.UU.'
        }
    },
    {
        special: true,
        date: '2026-04-15',
        location: {
            en: 'Houston, USA',
            es: 'Houston, EE.UU.'
        },
        description: {
            en: 'Argentina wine tasting for Cheers & Queers - Private event',
            es: 'Degustación de vinos argentinos para Cheers & Queers - Evento privado'
        }
    },
    {
        special: true,
        date: '2026-04-21',
        location: {
            en: 'Houston, USA',
            es: 'Houston, EE.UU.'
        },
        description: {
            en: 'Malbec Food & Wine Pairing class - Central Market',
            es: 'Clase de maridaje Malbec - Central Market'
        }
    },
    {
        startDate: '2026-04-28',
        endDate: '2026-05-18',
        location: {
            en: 'New York, USA',
            es: 'Nueva York, EE.UU.'
        }
    },
    {
        special: true,
        date: '2026-05-07',
        location: {
            en: 'New York, USA',
            es: 'Nueva York, EE.UU.'
        },
        description: {
            en: '"Latin Soul" - Open Pop-Up Dinner - Tickets available',
            es: '"Latin Soul" - Pop-Up Dinner abierto - Entradas disponibles'
        }
    },
    {
        special: true,
        date: '2026-05-11',
        location: {
            en: 'New York, USA',
            es: 'Nueva York, EE.UU.'
        },
        description: {
            en: 'Private Pop-up dinner for Trivento Wines - West Village',
            es: 'Pop-up dinner privado para Trivento Wines - West Village'
        }
    },
    {
        special: true,
        date: '2026-05-14',
        location: {
            en: 'New York, USA',
            es: 'Nueva York, EE.UU.'
        },
        description: {
            en: '"Latin Soul" - Open Pop-Up Dinner - Tickets SOLD OUT',
            es: '"Latin Soul" - Pop-Up Dinner abierto - Entradas AGOTADAS'
        }
    },
    {
        startDate: '2026-05-19',
        endDate: '2026-06-02',
        location: {
            en: 'Denver, USA',
            es: 'Denver, EE.UU.'
        }
    }
];

export const archivedStays: ArchivedStay[] = [
    {
        startDate: '2025-03-30',
        endDate: '2025-04-13',
        location: {
            en: 'Los Angeles + Palm Springs, USA',
            es: 'Los Ángeles + Palm Springs, EE.UU.'
        }
    },
    {
        startDate: '2025-04-13',
        endDate: '2025-04-23',
        location: {
            en: 'Miami, USA',
            es: 'Miami, EE.UU.'
        }
    },
    {
        startDate: '2025-04-23',
        endDate: '2025-06-01',
        location: {
            en: 'Houston + San Antonio, USA',
            es: 'Houston + San Antonio, EE.UU.'
        }
    }
];
