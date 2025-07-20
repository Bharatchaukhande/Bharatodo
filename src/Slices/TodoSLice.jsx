 import { createSlice } from "@reduxjs/toolkit";

 const TodoSlice = createSlice({
    name:"Todo",
    initialState:{
        lists:[]
    },
    reducers:{
        addtodo:(state,action)=>{
            state.lists.push(action.payload)
        },
        removetodo:(state,action)=>{
            state.lists.splice(action.payload,1)
        },
        edittodo:(state,action)=>{
                const {index,newValue}= action.payload
                state.lists[index]= newValue;
        },
        cleartodo:(state,action)=>{
              state.lists = []
        }
    }
 })

 export const{addtodo,removetodo,edittodo,cleartodo} = TodoSlice.actions;
 export default TodoSlice.reducer