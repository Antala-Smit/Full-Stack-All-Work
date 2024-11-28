let initialState = {
    studentList : [],
    error : null
}

const StudentReducer = (state = initialState,action) => {
    switch(action.type){
        
        case 'addstudent':
            return {
                ...state,
                studentList : [...state.studentList,action.payload],
                error : null
            }

        case 'addstudenterr':
            return {
                ...state,
                error : action.payload
            }

        case 'viewstudent':
            return {
                ...state,
                studentList : action.payload
            }

        case 'viewstudenterr':
            return{
                ...state,
                error : action.payload
            }

        case 'deletestudenterr':
            return {
                ...state,
                error : action.payload
            }

        case 'updatestudenterr':
            return {
                ...state,
                error : action.payload
            }

        default:
            return state;
    }
}

export default StudentReducer;