import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

    // Create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Get current User
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log(currentUser);
            setLoading(false)
        } )
        return () => {
            unSubscribe();
        }
    },[])


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