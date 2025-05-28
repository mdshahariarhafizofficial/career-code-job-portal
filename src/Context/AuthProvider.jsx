import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import { signOut } from "firebase/auth";
import toast from 'react-hot-toast';

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

    // Create User
    const createUser = (email, password) => {
        setLoading(true)
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

    // Sing Out
    const signOutUser = () => {
        signOut(auth)
        .then(() => {
            toast.success('Sign Out Successful!')
        })
        .catch((error) => {
            toast.error(error.message)
        })
    }

    // Context Data
    const contextData = {
        createUser,
        user,
        setUser,
        loading,
        setLoading,
        signOutUser,
    }

    return (
        <AuthContext value={contextData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;