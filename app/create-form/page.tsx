"use client"
import Navbar from "@/Components/Navbar";
import { useState, useEffect } from "react";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '@/firebase-config';
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthProvider";
const page = () => {
  
   const router = useRouter();
const { isAuth, setIsAuth } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [loading, setLoading] = useState(false);

 const postCollectionRef = collection(db, "All-posts"); // collection reference

  // create post function
  const createPost = async (e:any) => {
    e.preventDefault();
    if (!auth.currentUser) {
      router.push('/login');
      return;
    }
    setLoading(true);
    await addDoc(postCollectionRef, {
      author: { 
        name: auth.currentUser.displayName ?? 'Anonymous', 
        id: auth.currentUser.uid, 
        email: auth.currentUser.email ?? '' 
      },
      title,
      postText,
      timestamp: serverTimestamp()
    });
    setLoading(false);
    router.push('/');
  };

  useEffect(() => {
    if (!isAuth) {
      router.push('/login');
    }
  }, [isAuth]);



  return (
    <>
    <Navbar />
    <div className='createPostPage max-w-3xl mx-auto pt-28'>
     <form  className=" CpContainer w-full max-w-2xl mx-auto p-6 rounded-2xl bg-gray-900 shadow-xl"  onSubmit={createPost}>
        <h1 className="text-[white] text-[5vh]">Create New Post</h1>
        <div className="inputGp">
          <label htmlFor="" className="text-[white]">Title:</label>
       <input id="title" 
       required type="text" placeholder="Title..." 
      onChange={(e) => setTitle(e.target.value)}

       className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30" />
        </div>
        <div className="inputGp">
          <label htmlFor="" className="text-[white]">Post:</label>
          <textarea
            name=""
            required
            placeholder='Post...'
            id="post" required placeholder="Post..."  
                onChange={(e) => setPostText(e.target.value)}  
            className="w-full resize-none rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30" />
                    
        </div>
        
        
        <button type="submit" disabled={loading} className=" w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 " >
           {loading ? "Submitting..." : "Submit Post"}
        </button>
      </form>
       {loading && <div className="spinner">Loading...</div>}
      
    </div>
            </>
  )
}

export default page