import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Authenticator } from './Authenticator';

const PrivateRoute = () => {
    const location = useLocation();
    console.log(location)
    return Authenticator.authenticate() ? <Outlet /> : <Navigate to={`/login?redirect=${location.pathname}`} />;
}

export default PrivateRoute