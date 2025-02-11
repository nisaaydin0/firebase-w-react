import React from 'react';
import { Outlet, Navigate} from 'react-router-dom';
import { isLoggedIn } from './MainLayout';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../firebase";




function AuthLayout() {

    const [user,isLoading] = useAuthState(auth);

    if(isLoading){
        return <h1>Loading...</h1>;
    }
    if(user){
        return <Navigate to="/" replace />
    }
  return (

    <div><Outlet/></div>
  )
}

export default AuthLayout;