import React, { useContext } from 'react';
import { AuthContext } from '../Provider/Provider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

  const {user, loading} = useContext(AuthContext)
  const location = useLocation();
  
  if(user){
    return children;
  }
  return <Navigate to={'/signin'} state={{from: location}} replace></Navigate>
  
};

export default PrivateRoute;