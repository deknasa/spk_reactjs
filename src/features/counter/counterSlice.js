import { createSlice } from "@reduxjs/toolkit"
import { GET_EMAIL_USER } from "../../actions/actions-type"

const getEmailSlice = createSlice({
    name: "user_email",
    initialState: {
        value: []
    },
    reducers: {
        GET_USER_EMAIL: (state, action) => {
            return{
                ...state,
                user_email: action.payload
            }
        }
    }
})

export const { GET_USER_EMAIL } = getEmailSlice.actions

export default getEmailSlice.reducer



// const globalState = {
//     user_email: [],
// }

// // reducerrr
// const rootReducer = (state = globalState, action) => {
//     switch(action.type){
//         case GET_EMAIL_USER:
//             console.log(action);
//             return{
//                 ...state,
//                 movie_id: action.payload
//             }
//         default:
//             return state
//     }
// }