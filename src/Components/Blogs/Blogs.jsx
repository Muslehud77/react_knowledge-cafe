import { useState,useEffect } from "react";
import Blog from "../Blog/blog";


const Blogs = ({handleBookmarks}) => {
    const [blogs,setBlogs] = useState([])

    useEffect(() =>{
        fetch('Blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    },[])

   


    return (
        <div className='md:w-2/3 space-y-10'>
          
            {
                blogs.map((blog,index) => <Blog handleBookmarks={handleBookmarks} key={index} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;