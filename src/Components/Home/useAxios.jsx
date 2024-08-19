import axios from 'axios';
import React from 'react';


export const AxiosSource = axios.create({
    baseURL : "http://localhost:3000"
})

const useAxios = () => {
    return AxiosSource
};

export default useAxios;