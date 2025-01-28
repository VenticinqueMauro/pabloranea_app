import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: {
        default: 'ITINERARY FEBRUARY / 2025',
        template: '%s - Pablo Ranea',
    },
    alternates: {
        canonical: 'https://pabloranea.com/en',
    },
    description: 'Transportation according to itinerary for all round trips from the hotel. | Visits, tastings, and lunches in wineries mentioned. | Personalized online attention from 08:00 am to 10:00 pm and face-to-face in our office, located in the lobby at the selected hotel.'
};

export default async function PressLayout({ children }: { children: React.ReactNode }) {

    return (
        <section >
            {children}
        </section>
    )
}