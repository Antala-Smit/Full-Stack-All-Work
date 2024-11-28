import axios from "axios"

export const addUser = (user) => {
    return async(dispatch) => {
        try{
            let all = await axios.post(`http://localhost:8000/users`,user);
            dispatch({
                type : 'adduser',
                payload : all.data
            })
        }catch(err){
            dispatch({
                type : 'addusererr',
                payload:err
            })
        }
    }
}

export const getUser = () => {
    return async(dispatch) => {
        try{
            let all = await axios.get(`http://localhost:8000/users`);
           dispatch({
                type : 'getuser',
                payload : all.data
           })
        }catch(err){
            dispatch({
                type : 'getusererr',
                payload : err
            })
        }
    }
}

export const deleteUser = (userId) => {
    return async(dispatch) => {
        try{
            let all = await axios.delete(`http://localhost:8000/users/${userId}`);
            dispatch({
                type : 'deleteUser',
                payload : userId
            })
        }catch(err){
            dispatch({
                type : 'deleteUsererr',
                payload : err
            })
        }
    }
}
