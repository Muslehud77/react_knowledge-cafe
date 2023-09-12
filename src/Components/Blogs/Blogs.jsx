import { useState,useEffect } from "react";


const Blogs = () => {
    const [blogs,setBlogs] = useState([])

    useEffect(() =>{
        fetch('Blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    },[])



    return (
        <div>
            <h4>{blogs.length}</h4>
        </div>
    );
};

export default Blogs;