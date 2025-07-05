import { Response } from "express";

export const deliverResponse = <T>(
    res: Response, 
    status: number = 200, 
    result: T, // T is to make sure that the result can be of any type
    message: string = 'Success Response', 
) => {

    if(res.headersSent) {
        // Early exit if the repsonse has been already sent to the client
        return
    }

    return res.status(status).json({ message, result })
}