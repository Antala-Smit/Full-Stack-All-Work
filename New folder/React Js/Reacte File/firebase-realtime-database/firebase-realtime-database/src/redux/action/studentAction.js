import { getDatabase, onValue, ref, remove, set, update } from "firebase/database"
import { app } from "../../firebaseConfig"
import { getFirestore } from "firebase/firestore"

const db = getDatabase(app)



export const  studentAdd = (student) => {  
    return async(dispatch) => {
        try{
            set(ref(db,"student/"+student.grid),{
                name : student.name,
                phone : student.phone
            })
            dispatch({
                type : 'addstudent',
                payload : student
            })
        }
        catch(err){
            dispatch({
                type : 'addstudenterr',
                payload : err
            })
        }
    }
}

export const viewStudent = () => {
    return async(dispatch) => {
        try{
            const users = ref(db,"student");
            onValue(users,(u)=>{
                const data = u.val();
                dispatch(fetchUser(data))
            })
        }catch(err){
            dispatch({
                type : 'viewstudenterr',
                payload : err
            })
        }
    }
}



const fetchUser = (data) => {
    return async(dispatch) => {
        try{
             dispatch({
                type : 'viewstudent',
                payload : data
            })
        }catch(err){
            console.log(err);
            return false;
        }
    }
}

export const studentDelete = (stid) => {
    return async(dispatch) => {
        try{
            const user = ref(db,"student/"+stid);
            remove(user);
            dispatch(viewStudent());
        }catch(err){
            dispatch({
                type : 'deletestudenterr',
                payload : err
            })
        }
    }
}


export const  updateStudent = (student) => {
    return async(dispatch) => {
        try{
            let user = ref(db,"student/"+student.grid);
            update(user,{
                name : student.name,
                phone : student.phone
            })
            dispatch(viewStudent())
        }catch(err){
            dispatch({
                type : 'updatestudenterr',
                payload : err
            })
        }
    }
}