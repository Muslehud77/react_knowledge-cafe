import { useState,useEffect } from "react";
import Blog from "../Blog/blog";
import PropTypes from 'prop-types'


const Blogs = ({handleBookmarks,handleRead}) => {
    const [blogs,setBlogs] = useState([])
    console.log(blogs)
    useEffect(() =>{
        fetch('Blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    },[])

   


    return (
        <div className='md:w-2/3 space-y-10'>
         
            {
                blogs.map((blog,index) => <Blog handleRead={handleRead} handleBookmarks={handleBookmarks} key={index} blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleBookmarks: PropTypes.func.isRequired,
    handleRead: PropTypes.func.isRequired
}

export default Blogs;