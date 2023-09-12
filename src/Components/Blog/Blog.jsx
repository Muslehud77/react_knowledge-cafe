import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({blog,handleBookmarks}) => {
const {title,cover_img,author,author_img,posted_date,reading_time,hashtags} = blog
    return (
        <div className='space-y-4 border-b-2 pb-5'>
            <img src={cover_img} className='rounded-md' alt={`title: ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                   
                        <img src={author_img} alt="" className='h-12 w-11 rounded-full' />
                    
                    
                    <div>
                        <h4 className='text-base font-semibold'>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center pb-10 gap-2'> 
                    <span>{reading_time} read</span>
                    <button onClick={()=>{handleBookmarks(title)}}><FaBookmark></FaBookmark></button>
                </div>

            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hashtag,index) => <span key={index}> <a href="">#{hashtag}</a></span>)

                }
            </p>
            <a className='text-blue-700 underline' href="">Mark as read</a>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;