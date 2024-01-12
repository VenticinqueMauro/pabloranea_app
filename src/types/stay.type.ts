
export type Stay = {
    _id: string,
    location: string,
    stay: {
        startDate: Date,
        endDate: Date,
        color: string
    },
    status: 'active' | 'inactive' | 'pending'
}