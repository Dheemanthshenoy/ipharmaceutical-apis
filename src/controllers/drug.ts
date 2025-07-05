import { Request, Response } from "express";
import Drug, { IDrug } from "../models/drug";
import { deliverResponse } from "../utils/deliverResponse";
import { messages } from "../constants/messages";
import { Query, search } from "../services/drug";
import { ISearch } from "../constants/types/search";

export const searchDrugs = async (req: Request, res: Response) => {
    const { body } = req
    const { page, limit } = req.query

    if (page == null || limit == null) {
        deliverResponse(res, 400, {}, messages.invalidParameters)
    }

    let query: Query = {}

    if (body) {
        if (body.company) {
            query['company'] = body.company
        }

        if (body.keyword) {
            query['$or'] = [
                { code: { $regex: body.keyword, $options: 'i' } },
                { genericName: { $regex: body.keyword, $options: 'i' } },
                { brandName: { $regex: body.keyword, $options: 'i' } }
            ]
        }
    }

    try {
        const response: ISearch<IDrug> = await search(query, Number(page), Number(limit), {})
        if (response instanceof Error) {
            deliverResponse(res, 400, response, messages.somethingWentWrong)
        } else {
            deliverResponse(res, 200, response, messages.successResponse)
        }
    } catch (error) {
        deliverResponse(
            res,
            500,
            { result: (error as Error).message },
            messages.internalServerError
        )
    }
}

export const drugCompanies = async (req: Request, res: Response) => {
    const response: string[] | null = await Drug.distinct('company')
    deliverResponse(res, 200, response, messages.successResponse)
}

export const findDrug = async (req: Request, res: Response) => {
    const response: IDrug | null = await Drug.findOne({ _id: req.params.drugId })
    deliverResponse(res, 200, response, messages.successResponse)
}