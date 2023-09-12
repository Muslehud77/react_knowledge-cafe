import { useState } from "react";
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/bookmarks/Bookmarks'
import Header from './Components/header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([])

    const handleBookmarks = (bookmark) =>{
        console.log(bookmark)
        const newBookmarks = [...bookmarks,bookmark]
        setBookmarks(newBookmarks)
    }

  return (
    <>
     
   <div className='max-w-7xl mx-auto'>
      <Header></Header>
     <div className='md:flex gap-2'>
      <Blogs handleBookmarks={handleBookmarks}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
     </div>
   </div>
      
    </>
  )
}

export default App
