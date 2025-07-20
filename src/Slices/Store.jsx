import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "../Slices/TodoSLice"


const appStore = configureStore({
    reducer:{
      todo:todoreducer,
    }
})

export default appStore