import React, { useCallback,useState } from 'react';
import { Link } from 'react-router-dom';
import {sendPasswordResetEmail} from "firebase/auth";
import {auth} from "../firebase";

function ForgotPassword() {
    const [email,setEmail]=useState("");
    const handleSubmit = useCallback((e)=>{
        e.preventDefault();
        if(!email){
            return;
        }
        sendPasswordResetEmail(auth,email).then(()=>{
            alert("we have sent you a reset password email.Check your inbox.It may take 5 min")
        }).catch((e)=>{console.log(e)});
    },[email]);
  return (
    <div className='max-w-md mx-auto py-12'>
         <h1 className='text-2xl'>Forgot my password</h1>
         <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-8'>
            <input className="p-4 bg-gray-100 rounded-md" type='email' placeholder='enter your email' value={email} onChange={e=> setEmail(e.currentTarget.value)}/>
            <input type="submit" className='p-4 bg-blue-400 rounded-md'  value="send reset password email"/>
            <Link to="/sign-in">Back to Sign In</Link>
         </form>



    </div>
   
  )
}

export default ForgotPassword