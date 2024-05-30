import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase";

export const Contexts = createContext();

const auth = getAuth(app);


// eslint-disable-next-line react/prop-types
const Context = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);


    // Set an authentication state observer and get user data

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            setUser(user);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    // loading spinner
    
    if(loading){
        return     <>
        {/*<!-- Component: Square horizontal base sized spinner --> */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-live="polite"
          aria-busy="true"
          aria-labelledby="title-08a desc-08a"
          className="h-6 w-6"
        >
          <title id="title-08a">Icon title</title>
          <desc id="desc-08a">Some desc</desc>
          <path
            d="M7 8H3V16H7V8Z"
            className="animate animate-bounce fill-emerald-500 "
          />
          <path
            d="M14 8H10V16H14V8Z"
            className="animate animate-bounce fill-emerald-500 [animation-delay:.2s]"
          />
          <path
            d="M21 8H17V16H21V8Z"
            className="animate animate-bounce fill-emerald-500 [animation-delay:.4s]"
          />
        </svg>
        {/*<!-- End Square horizontal base sized spinner --> */}
      </>
    }

    // Google login 
    const provider  = new GoogleAuthProvider();

    const google = () =>{
        return signInWithPopup(auth , provider);
    }

    // email and password register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    // email and password login
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // forgot password
    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
     }

    // logout
    const LogOut = () => {
        return signOut(auth);
    }
    const info = {
        user,
        loading,
        google,
        createUser,
        loginUser,
        forgotPassword,
        LogOut
    }


    


    return (
        <Contexts.Provider value={info}>
            {children}
        </Contexts.Provider>
    );
};

export default Context;