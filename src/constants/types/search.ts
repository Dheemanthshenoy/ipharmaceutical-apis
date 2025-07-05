export interface ISearch <T>{
    results: T[]
    page: number
    limit: number
    totalResults: number
    totalPages: number
    hasNextPage: boolean
    hasPreviousPage: boolean
    nextPage: number | null
    previousPage: number | null
    isLastPage: boolean
}