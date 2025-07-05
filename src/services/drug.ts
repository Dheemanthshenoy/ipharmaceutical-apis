import { ISearch } from "../constants/types/search"
import Drug, { IDrug } from "../models/drug"
import { searchResponse } from "../utils/searchResponse"

export type Query = {
    company?: string
    '$or'?: Array<any>
}

export const search = async (
    query: Query,
    page: number = 1,
    limit: number = 10,
    projection: Record<string, 0 | 1> = {}
): Promise<ISearch<IDrug>> => {
    try {
        const [
            totalResults,
            results
        ] = await Promise.all([
            Drug.countDocuments(query),
            Drug.find(query, projection)
                .limit(limit)
                .skip((page - 1) * limit)
                .sort({ launchDate: -1 })
        ])

        return searchResponse<IDrug>(results, totalResults, page, limit)
    } catch (error) {
        throw (error as Error).message
    }
}