import mongoose from "mongoose";

const upcommingSchema = new mongoose.Schema(
    {
        batchName: {
            type: String,
            required: true,
            trim: true
        },
        startingDate: {
            type: Date,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        instructorName: {
            type: String,
            required: true,
            trim: true
        },
        mode: {
            type: String,
            required: true,
            trim: true
        },
        zoomRegistrationLink: {
            type: String,
            default: null
        },
    },
    {
        timestamps: true,
    }
);

const Upcomming = mongoose.model('Upcomming', upcommingSchema);
export default Upcomming;