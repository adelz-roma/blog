"use client"

import Link from 'next/link'
import { AuthContext } from "@/context/AuthProvider";
import { useContext } from 'react';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';
import { auth } from '@/firebase-config';
import { useRouter } from "next/navigation";




const Navbar = () => {
  
  const { isAuth, setIsAuth } = useContext(AuthContext);
   const router = useRouter();

  

  const logout = () => {
    if (window.confirm("Are you sure you want to sign out?")) {
        signOut(auth).then(() => {
          localStorage.removeItem('isAuth');
          toast.success('You have successfully signed out');
          setIsAuth(false);
          router.push('/');
        }).catch((error) => {
          console.log(error.message)
      })
    }
}
  return (
    <nav className='nav'> 

     <Link href='/'>Blog</Link>
     

     {
      !isAuth ? (  <Link href='/login'>Login</Link> ):(
        <>
        <Link href='/create-form'>Create Post</ Link>
        <button className="login-btn"  onClick={logout}>Sign Out</button>
        </>
      )
     }

    </nav>
  )
}
export default Navbar