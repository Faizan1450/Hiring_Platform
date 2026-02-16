import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    company_name: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        required: true,
        trim: true
    },
    job_type: {
        type: String,
        enum: ["FULL_TIME", "PART_TIME", "INTERNSHIP", "CONTRACT"],
        required: true,
    },
    company_logo_url: {
        type: String,
        default: null
    },
    location: [{
        type: String,
        required: true,
        trim: true
    }],
    job_mode: {
        type: String,
        required: true,
        trim: true
    },
    min_salary: {
        type: Number,
        required: true,
        min: -1,
        max: 100,
        default: -1
    },
    max_salary: {
        type: Number,
        required: true,
        min: -1,
        max: 100,
        default: -1
    },
    min_experience: {
        type: Number,
        default: 0,
        min: 0,
        max: 30
    },
    max_experience: {
        type: Number,
        default: 0,
        min: 0,
        max: 30
    },
    degree: [
        {
            type: String,
            required: true,
            trim: true
        }
    ],
    cgpa: {
        type: Number,
        default: 0
    },
    skills: [
        {
            type: String,
            trim: true,
            required: true,
        }
    ],
    platform: {
        type: String,
        enum: ["LinkedIn", "Naukri", "Company Site", "Other"],
        required: true
    },
    redirected_link: {
        type: String,
        trim: true
    },
    start_date: {
        type: Date,
        required: true,
    },
    close_date: {
        type: Date,
        required: true,
    },
    created_by: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ["ACTIVE", "CLOSED"],
        default: "ACTIVE"
    },
    is_featured: {
        type: Boolean,
        default: false
    },
    last_updated: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true,
});

const Job = mongoose.model('Job', jobSchema);
export default Job;