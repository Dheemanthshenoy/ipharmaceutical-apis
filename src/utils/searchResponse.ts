export const searchResponse = <T>(results: T[], totalResults: number, page: number = 1, limit: number = 10) => {
    const totalPages: number = Math.ceil(totalResults / limit)
    const hasNextPage: boolean = page < totalPages
    const hasPreviousPage: boolean = page > 1
    const nextPage: number | null = hasNextPage ? page + 1 : null
    const previousPage: number | null = hasPreviousPage ? page - 1 : null

    return {
        results,
        totalResults,
        totalPages: totalPages == 0 ? 1 : totalPages,
        page,
        limit,
        hasNextPage,
        hasPreviousPage,
        nextPage,
        previousPage,
        isLastPage: !hasNextPage
    }
}