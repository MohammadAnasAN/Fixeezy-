import mongoose from "mongoose";

const workerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: Object,
        required: true,
    },
    speciality: {
        type: String,
        required: true,
    },
    degree:{
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    available: {
        type: Boolean,
        required: true,
    },
    fees: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        default: 0,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    slots_booked: {
        type: Object,
        default: {},
    },

},{minimize:false});

const workerModel =mongoose.models.worker || mongoose.model("worker", workerSchema);

export default workerModel;
      
