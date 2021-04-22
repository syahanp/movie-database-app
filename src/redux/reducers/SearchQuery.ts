export const SearchQuery = (state = "", action:any) => {
    switch (action.type) {
        case 'SET_SEARCH_QUERY':
            return state = action.payload
        default:
            return state;
    }
}