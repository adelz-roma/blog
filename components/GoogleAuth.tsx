

"use client"
import { FcGoogle } from 'react-icons/fc';
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthProvider";
import { signInWithPopup } from 'firebase/auth';
import { provider, auth } from '@/firebase-config';
import React, { useContext } from 'react'

const GoogleAuth = () => {

 const router = useRouter();
 const { setIsAuth } = useContext(AuthContext);

 const signInWithGoogle = () => {
      signInWithPopup(auth, provider).then((result) => {
        localStorage.setItem("isAuth", "true");
        setIsAuth(true)
        router.push("/");
      }).catch((error) => {
        console.log(error.message);
      });

 };


 return (
    <button  
     onClick={signInWithGoogle}
     className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
    <div className="flex items-center justify-center">
    <FcGoogle className='w-7 h-7'/>
        <span className="ml-4"> Log in with Google </span>
        
    </div>
   </button>
  )
}

export default GoogleAuth;