
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/bookmarks/Bookmarks'
import Header from './Components/header/Header'

function App() {
 

  return (
    <>
     
     <Header></Header>
     <div className='md:flex'>
      <Blogs ></Blogs>
      <Bookmarks></Bookmarks>
     </div>
      
    </>
  )
}

export default App
