import * as type from '../type'


export const getUsers = (users: any) => {
    return {
        type: type.GET_USERS,
        payload: users,
    }
}