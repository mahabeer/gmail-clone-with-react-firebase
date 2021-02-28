export const initialState = {
    showcompose:false,
    user : null,
}


export const actions = {
    SHOW_COMPOSE : "SHOW_COMPOSE",
    HIDE_COMPOSE : "HIDE_COMPOSE",
    SET_USER : "SET_USER"
}
export function reducer(state,action) {
    console.log(action);
    switch (action.type) {
        case actions.SHOW_COMPOSE:
            return {
                ...state,
                showcompose:action.showcompose,
            }
            break;
        case actions.HIDE_COMPOSE:
                return {
                    ...state,
                    showcompose:action.showcompose,
                }
                break;
        case actions.SET_USER:
            return {
                ...state,
                user:action.user,
            }
            break;
    
        default:
            return state;
            break;
    }
    console.log(state.showcompose);
}