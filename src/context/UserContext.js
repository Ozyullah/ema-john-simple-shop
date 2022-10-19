import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import app from '../firebase/firebase.init';
import { faEject } from '@fortawesome/free-solid-svg-icons';

export const AuthContext =createContext();

const auth =getAuth(app);

const UserContext = ({children}) => {

    const [user, setUser]=useState(null);

    const [loading, setLoading]=useState(true);

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut =()=>{
        return signOut(auth)
    }

    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,(currentUser)=>{
            console.log('This is a current user',currentUser);
            setUser(currentUser)
            setLoading()
        });
        return ()=>unSubscribe();
    },[])

    const authInfo ={user,loading,createUser,signInUser,logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;