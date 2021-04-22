export const setSearchQuery = (query:string) => {
    return {
        type: "SET_SEARCH_QUERY",
        payload: query,
    }
};

export const setModalPoster = (imgUrl: string) => {
    return {
        type: "SET_POSTER_MODAL",
        payload: imgUrl
    }
}