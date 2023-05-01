import { useContext, useState, createContext, useEffect } from 'react';
import { auth } from '../firebase';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from 'firebase/auth';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => { // main function

    const [user,setUser] = useState({});

    const signUp = (email,password) => {
         return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password) => {
         return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = (email,password) => {
         return signOut(auth);
    }

    useEffect(() => {
        const unsunscribe =  onAuthStateChanged(auth, (curUser) => setUser(curUser))

        return () => {
            return unsunscribe();
        }
    })

    return (
        <AuthContext.Provider value={{ signUp, signIn,logOut, user }}>
            {children}
        </AuthContext.Provider>
    )

}

export const  userAuth = () => {
    return useContext(AuthContext);
}