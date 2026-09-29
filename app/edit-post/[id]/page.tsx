import React from 'react'

const page = () => {
  





  return (
    <div className='createPostPage'>
       <form className="cpContainer">
      <h1> Update New Post</h1>
      <div className="inputGp">
        <label htmlFor="">Title:</label>
        <input
          required
          type="text"
          placeholder='Title...'
         
        />
      </div>
      <div className="inputGp">
        <label htmlFor="">Post:</label>
        <textarea
          name=""
          required
          placeholder='Post...'
    
          
        />
      </div>
      <button type="submit" >
      
      </button>
    </form>
    {<div className="spinner">Updating...</div>}
  </div>
    
  )
}

export default page
