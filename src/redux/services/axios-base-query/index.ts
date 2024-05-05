import { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios from "../Http"

const axiosBaseQuery = ({ baseUrl } : any) => async ({ url, method, params } : any) => {
    try {
      const response = await axios({
        method,
        url: baseUrl + url,
        params,
      });
      return { data: response.data };
    } catch (error : any) {
      return { error: error.message || "An error occurred" };
    }
  };

  export default axiosBaseQuery