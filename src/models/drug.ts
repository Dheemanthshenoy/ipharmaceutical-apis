import mongoose from "mongoose";

export interface IDrug {
    _id: string
    code: string
    genericName: string
    company: string
    brandName: string
    launchDate: Date,
    createdAt: Date
    updatedAt: Date
    __v: string
}

const drug = new mongoose.Schema<IDrug>({
    code: { type: String, required: true },
    genericName: { type: String, required: true },
    company: { type: String, required: true },
    brandName: { type: String, required: true },
    launchDate: { type: Date, required: true },
}, { timestamps: true })

const Drug = mongoose.model<IDrug>("drugs", drug);

export default Drug;