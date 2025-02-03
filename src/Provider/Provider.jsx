import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signOut } from '@firebase/auth';
import React, { useState } from 'react';
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
  
  
  const authInfo = {
    createUser,
    signIn,
    signout,
  
  }


  return (
    <AuthContext.Provider  value={"authInfo"}>
      {children}
    </AuthContext.Provider>
  );
};

export default Provider;