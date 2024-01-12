import { Schema, Types, model, models } from "mongoose";


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