import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '../axios-base-query';

export const getJobListApi = createApi({
    reducerPath : 'jobList',
    baseQuery : axiosBaseQuery({baseUrl : 'https://api.weekday.technology/adhoc/'}),
    endpoints:(builder : any)=>({
        getJobList:builder.query({
           query:(data : any)=>({
            url:'getSampleJdJSON',
            method:'POST',
            params:data
           })
        })
    })

})

export const {useGetJobListQuery} = getJobListApi