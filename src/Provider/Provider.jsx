import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, deleteUser, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const Provider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
      setLoading(true);
      return signOut(auth);
    }

    // update user profile
    const updateuserProfile = (photo, name) => {
      setLoading(true);
      return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      });
    }

    // Send a user a verification email
    const sendverifimail = () => {
      return sendEmailVerification(auth.currentUser)
    }

    // Send a password reset email
    const psaaResetmail =()=> {
      return sendPasswordResetEmail(auth, email)
    }

    
    // google
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    // Delete a user
    const delUser = () =>{
      return deleteUser(user)
    }

    // ********  Server Side   ***********











    // ********  Server Side  ---End--- ***********


    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser);
          if (currentUser) {
              // get token and store client
              const userInfo = { email: currentUser.email };
              axiosPublic.post('/jwt', userInfo)
                  .then(res => {
                      if (res.data.token) {
                          localStorage.setItem('access-token', res.data.token);
                          console.log("res.data.token", res.data.token);
                          setLoading(false);
                      }
                  })
          }
          else {
              // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
              localStorage.removeItem('access-token');
              setLoading(false);
          }
          
      });
      return () => {
          return unsubscribe();
      }
  }, [axiosPublic])
  

    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        logOut,
        googleSignIn,
        updateuserProfile,
        sendverifimail,
        psaaResetmail,
        delUser

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;