import Drug, { IDrug } from "../models/drug";
import { Response, Request } from "express";
import fs from 'fs';
import path from 'path';
import { deliverResponse } from "../utils/deliverResponse";
import { messages } from "../constants/messages";

export const seedDrugs = async (req: Request, res: Response) => {
    try {
        const file = path.join(__dirname, '../../data/drugs.json');
        const rawDocs = fs.readFileSync(file, 'utf-8');
        const drugDocs = JSON.parse(rawDocs)

        const totalResults = await Drug.countDocuments()

        if (totalResults > 0) {
            deliverResponse(res, 409, {}, messages.drugAlreadyExists)
            return
        }

        const response = await Drug.insertMany(drugDocs)
        deliverResponse(res, 200, response, messages.successResponse)
    } catch (error: any) {
        deliverResponse(res, 500, { result: error.message }, messages.internalServerError)
    }
}