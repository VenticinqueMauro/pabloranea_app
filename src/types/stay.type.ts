import { Event } from "./event.type"

export type Stay = {
    _id: string,
    location: string,
    startDate: Date,
    endDate: Date,
    description: string
    color: string
    events: Event[] | [],
    __v?: number
}