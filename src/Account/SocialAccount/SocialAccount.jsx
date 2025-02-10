import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/Provider';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const SocialAccound = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleSignIn = () => {
    googleSignIn()
      .then(result => {
        console.log(result.user);
        const userInfo = {
          name: result.user?.displayName,
          photo: result.user?.photoURL,
          email: result.user?.email,
          createdAt: result.user?.metadata?.creationTime || new Date().toISOString()
        };

        axiosPublic.post('/users', userInfo)
          .then(res => {
            console.log(res.data);
            navigate('/');
          });
      })
      .catch(error => console.log(error));
  };

  return (
    <div onClick={handleSignIn} className='cursor-pointer'>
      <div className='bg-cyan-900 flex justify-center cursor-pointer py-2'>
        <button className='flex justify-center items-center cursor-pointer'>
          <FaGoogle className='mx-2' />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SocialAccound;
