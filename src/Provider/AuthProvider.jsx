import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
// GoogleAuthProvider,----------------added in uper field
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    // const Googleprovider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    //user create
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }


    //user login
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //logOut
    const logOut = () =>{
        return signOut(auth)
        
    }


    //Observeer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])


    const authInfo = {
        // auth,
        user,
        loading,
        // Googleprovider,
        createUser,
        signIn,
        logOut,
        

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;