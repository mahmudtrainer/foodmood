import React, { useContext } from 'react';
import { ContextSource } from '../ContextAPI/ContextAPI';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(ContextSource)

if(loading){
    return "loading"
}

if(user){
    return children
}
else{
    return <Navigate to={'/login'}></Navigate>
}
};

export default PrivateRoute;