import { Schema, Types, model, models } from "mongoose";

const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        unique: true
    },
    time: {
        type: String,
    },
    location: {
        type: String,
    },
    description: {
        type: String
    },
    status: {
        type: Boolean,
        default: true
    }
})

const Event = models.Event || model('Event', eventSchema)
export default Event; 