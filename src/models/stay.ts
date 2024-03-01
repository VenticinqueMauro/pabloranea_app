import { Schema, model, models } from "mongoose";
import { Familjen_Grotesk } from "next/font/google";


const staySchema = new Schema({
    location: {
        type: String,
    },
    startDate: {
        type: Date,
        required: true,
        unique: true
    },
    endDate: {
        type: Date,
        required: true,
        unique: true
    },
    description: {
        en: {
            type: String,
            required: false
        },
        es: {
            type: String,
            required: false
        }
    },
    color: {
        type: String,
        default: "#9cd3f7"
    },
    events: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Event'
        }
    ]
})

const Stay = models.Stay || model('Stay', staySchema);
export default Stay; 