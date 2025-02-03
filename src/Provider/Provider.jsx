import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext(null);

const auth = getAuth(app);




const Provider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email , password)
  }

  const signIn = (email , password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signout = () =>{
    setLoading(true);
    return signOut(auth);
  }

  // sign in with google

  const signInWithGoogle =()=>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser);
      setLoading(true);
    }) 

    return() =>{
      unsubscribe()
    }
  }, [])

  
  
  const authInfo = {
    createUser,
    signIn,
    signout,
    signInWithGoogle,
    user,
  
  }


  return (
    <AuthContext.Provider  value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default Provider;