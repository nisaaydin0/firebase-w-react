import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCX87aDcoKEykf3XyLbyF9SOIuNiqrTxiY",
    authDomain: "posts-app-2679c.firebaseapp.com",
    projectId: "posts-app-2679c",
    storageBucket: "posts-app-2679c.firebasestorage.app",
    messagingSenderId: "1067190339332",
    appId: "1:1067190339332:web:91b3305e217ebe2a6e7251",
    measurementId: "G-1BKSCFQM7P"
  };
  



  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export const auth = getAuth(app);