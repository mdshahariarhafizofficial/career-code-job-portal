import React, { useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState();

    // Create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }



    // Context Data
    const contextData = {
        createUser,
        user,
        setUser,
        loading,
        setLoading,
    }

    return (
        <AuthContext value={contextData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;