import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/firebase.config';
// import { GoogleAuthProvider } from 'firebase/auth/web-extension';

export const ContextSource = createContext()

const ContextAPI = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true);

    const auth = getAuth(app)

    const provider = new GoogleAuthProvider()

    const createUser = (email, password, name, photo) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res);
                
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                })
            })
            .catch(err => {
                console.log(err);

            })

    }

    const logIn = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setloading(true)
        return signOut(auth)
    }

    const googleUser = () => {
        setloading(true)
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (customer) => {
            setloading(false)
            if (customer) {
                console.log(customer);
                setUser(customer)


            }
            else {
                setUser(null)
            }
        })
    }, [auth]);

    const data = { createUser, logIn, logOut, user, loading, googleUser }

    return <ContextSource.Provider value={data}>
        {children}
    </ContextSource.Provider>
};

export default ContextAPI;