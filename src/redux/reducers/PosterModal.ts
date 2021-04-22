export const PosterModal = (state = "", action:any) => {
    switch (action.type) {
        case 'SET_POSTER_MODAL':
            return state = action.payload
        default:
            return state;
    }
}