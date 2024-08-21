import axios from 'axios';
import React from 'react';

<<<<<<< HEAD
export const AxiosSource = axios.create({
    baseURL : 'http://localhost:3000/'
})

=======

export const AxiosSource = axios.create({
    baseURL : "http://localhost:3000"
})
>>>>>>> e9ea68bdf42554fb55684a07aac301a5287ab163

const useAxios = () => {
    return AxiosSource
};

export default useAxios;