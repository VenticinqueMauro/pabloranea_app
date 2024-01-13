import { Event } from "./event.type"

export type Stay = {
    _id?: string,
    location: string,
    startDate: Date,
    endDate: Date,
    color: string
    events: Event[] | undefined
}