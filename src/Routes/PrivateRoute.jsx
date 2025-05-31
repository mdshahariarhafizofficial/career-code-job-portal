import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext';
import { Navigate } from 'react-router';
import Loading from '../Pages/Loading/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return children
    }
    return <Navigate to='/sing-in'></Navigate>
};

export default PrivateRoute;