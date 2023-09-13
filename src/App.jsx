import { useState } from "react";
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/bookmarks/Bookmarks'
import Header from './Components/header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([])

    const handleBookmarks = (bookmark) =>{
     
        const newBookmarks = [...bookmarks,bookmark]   
        setBookmarks(newBookmarks)
       
  
  }


     const [readTime,setReadTime] = useState([])

    const handleRead = (time,id) =>{
      const newBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
      setBookmarks(newBookmarks)
      const newReadTime = [...readTime, time.replace('mins','') ]
      setReadTime(newReadTime)
    }

  return (
    <>
     
   <div className='max-w-6xl mx-auto'>
      <Header></Header>
     <div className='md:flex gap-2'>
      <Blogs handleRead={handleRead} handleBookmarks={handleBookmarks}></Blogs>
      <Bookmarks readTime={readTime} bookmarks={bookmarks}></Bookmarks>
     </div>
   </div>
      
    </>
  )
}

export default App
