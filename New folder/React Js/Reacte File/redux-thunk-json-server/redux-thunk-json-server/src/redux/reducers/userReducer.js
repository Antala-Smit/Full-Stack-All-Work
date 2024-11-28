let initialState = {
    users  : [],
    error : null
}

const UserReducer = (state = initialState,action) => {
    switch(action.type){
        case 'adduser':
        return {
            ...state,
            users : [...state.users,action.payload],
            error : null
        }


        case 'addusererr':
            return {
                ...state,
                error : action.payload
            }


        case 'getuser':
            return {
                ...state,
                users : action.payload,
                error : null
            }

        case 'getusererr':
            return{
                ...state,
                error : action.payload
            }

        case 'deleteUser':
            return{
                ...state,
                users : state.users.filter(val => val.id != action.payload),
                error : null
            }

        case 'deleteUsererr':
            return {
                ...state,
                error : action.payload
            }

        default:
            return state
    }
}

export default UserReducer;