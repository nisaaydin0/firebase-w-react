import React from 'react';
import { useState , useCallback} from 'react';
import { signInWithEmailAndPassword ,createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from "../firebase";
import { Link } from 'react-router-dom';

function SingUp() {
  const [email,setEmail]=useState("");
  const [password,setPassword] = useState("");

   const handleSubmit = useCallback((e)=>{
    e.preventDefault();
    if(!email || !password){
      return;
    }
    createUserWithEmailAndPassword(auth,email,password).then(()=>{alert("you have created a new account")}).catch((e)=>{console.log(e);});
    
  },[email,password]);

  return (
    <div className='max-w-md mx-auto py-12'>
        <h1 className='text-2xl'>Create New Account</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'> 
            <input type='email' placeholder='Enter your email' value={email} onChange={(e)=> setEmail(e.currentTarget.value)} />
            <input type='password' placeholder='Enter your password'value={password} onChange={(e)=> setPassword(e.currentTarget.value)} />
            <input type='submit' value="Sign Up"/>
            <Link to="/sign-in">You already have an account ? Sign In ! </Link>
        </form>
    </div>
  )
}

export default SingUp