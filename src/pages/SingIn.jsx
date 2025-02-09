import React, { useCallback } from 'react';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase';
import { Link } from 'react-router-dom';

function SingIn() {
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");

    const handleSubmit=useCallback((e)=>{
      e.preventDefault;
      if(!email || !password){
        return;
      }

      signInWithEmailAndPassword(auth,email,password).then(()=>{alert("you have signed in!")}).catch((e)=>{console.log(e)})
    },[email,password]);


  return (
    <div className='max-w-md mx-auto py-12'>
      <h1 className='text-2xl'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='email' placeholder='enter your email' value={email} onChange={e => setEmail(e.currentTarget.value)}/>
        <input type='password' placeholder='enter your password' value={password} onChange={e => setPassword(e.currentTarget.value)}/>
        <Link to="/forgot-password" className='ml-auto'>Forgot password ?</Link>
        <input type='submit' className='p-4 bg-pink-400 rounded-md' value="Sign In"/>
        <Link to="/sign-up">Don't have an account ? Sign Up ! </Link>
       
      </form>



    </div>
  )
}

export default SingIn