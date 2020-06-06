import React from 'react';
import SignIn from '../../components/sign-in/signIn';
import Signup from '../../components/sign-up/signUp';
import './sign-in-and-sign-up.scss';

const SignInAndSignUp = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <Signup />
    </div>
  );
};

export default SignInAndSignUp;
