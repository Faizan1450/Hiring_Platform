import mongoose from "mongoose";

const upcommingSchema = new mongoose.Schema(
    {
        batchName: {
            type: String,
            trim: true
        },
        startingDate: {
            type: String,
            trim: true
        },
        time: {
            type: String,
            trim: true
        },
        instructorName: {
            type: String,
            trim: true
        },
        mode: {
            type: String,
            trim: true
        },
        zoomRegistrationLink: {
            type: String,
            trim: true
        },
    },
    {
        timestamps: true,
    }
);

const Upcomming = mongoose.model('Upcomming', upcommingSchema);
export default Upcomming;