import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading/Loading';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    console.log(location);
    
    const {user, loading} = useContext(AuthContext);
    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return children
    }
    return <Navigate to='/sing-in' state={location.pathname}></Navigate>
};

export default PrivateRoute;