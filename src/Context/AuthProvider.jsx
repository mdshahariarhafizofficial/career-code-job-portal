import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import { signOut } from "firebase/auth";
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from "firebase/auth";
import axios from 'axios';

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);


const googleProvider = new GoogleAuthProvider();
    // Create User
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sing in User
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign In With Gmail
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // Get current User
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log(currentUser);
            setLoading(false);
            // Jwt 
            if (currentUser?.email) {
                axios.post('http://localhost:8000/jwt', {
                    user : currentUser?.email
                })
                .then(res => {
                    localStorage.setItem('token', res.data.token)
                    
                }).catch(error  => {
                    console.log(error);
                    
                })
            }

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
        signInUser,
        googleSignIn,
    }

    return (
        <AuthContext value={contextData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;