import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/Provider';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const SocialAccound = () => {
  const {user, loading, googleSignIn} = useContext(AuthContext);
  const navigate = useNavigate();


  const handleSignIn = () => {
    googleSignIn()
    
    .then(() => {
      navigate("/"); // Navigate to the home page
    })
  }

  return (
    <div>
      <div>
        <button className='btn' onClick={handleSignIn}>
          <FaGoogle></FaGoogle>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SocialAccound;