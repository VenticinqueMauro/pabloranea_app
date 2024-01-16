export type Event = {
    _id: string,
    title: string,
    location: string,
    date: Date | string,
    time: string,
    description: string,
    status: 'active' | 'inactive',
    __v?: number,
}