import React, { useState } from 'react';
import AuthContext from './AuthContext';

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState();








    // Context Data
    const contextData = {

    }

    return (
        <AuthContext value={contextData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;