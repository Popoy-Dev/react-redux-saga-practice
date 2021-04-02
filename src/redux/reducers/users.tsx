import * as type from '../type'

const initialState = {
    users: [],
}

export const users = (state = initialState, action: any) => {
    switch (action.type) {
        case type.GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
}
