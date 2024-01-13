import { Schema, model, models } from "mongoose";

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
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    }
})

const Event = models.Event || model('Event', eventSchema)
export default Event; 