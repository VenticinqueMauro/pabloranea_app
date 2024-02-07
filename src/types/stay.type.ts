import { Event } from "./event.type"

export type Stay = {
    _id: string,
    location: string,
    startDate: Date,
    endDate: Date,
    description: Description
    color: string
    events: Event[] | [],
    __v?: number
}

type Description = {
    en: string,
    es: string
}