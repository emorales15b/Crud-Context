import { GET_DELETE_USER, GET_USERS, GET_ADD_USER, GET_SHOW_EDIT_USER, GET_EDIT_USER } from './types'

export default (state, action) => {
    const {payload, type} = action;

    switch(type){
        case GET_USERS:
            return {
                ...state,
                users: payload
            }
        case GET_DELETE_USER:
            return {
                ...state,
                users: payload
            }
        case GET_ADD_USER:
            return {
                ...state,
                users: payload
            }
        case GET_SHOW_EDIT_USER:
            return {
                ...state,
                show_user_edit: payload
            }
        case GET_EDIT_USER:
            return {
                ...state,
                users: payload
            }
        default:
            return state;
    }

}