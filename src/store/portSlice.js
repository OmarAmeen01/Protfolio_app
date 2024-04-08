import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoaded:false,
   
}

const portSlice= createSlice({
    name:"loading",
    initialState,
    reducers:{

        setLoaded:(state,action)=>{
          state.isLoaded=action.payload
        },
       
    }
})

export const {setLoaded}  = portSlice.actions
export default portSlice.reducer