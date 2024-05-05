import { configureStore } from "@reduxjs/toolkit";
import { getJobListApi } from "../services/joblist";
import { get } from "http";

export const store = configureStore({
    reducer:{
        [getJobListApi.reducerPath]:getJobListApi.reducer
    },
    middleware:(getDefaulMiddleware)=>
        getDefaulMiddleware().concat(
            getJobListApi.middleware
        )
})