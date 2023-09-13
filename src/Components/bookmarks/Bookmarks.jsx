
import { PropTypes } from 'prop-types';
import Read from '../markRead/Read';



const Bookmarks = ({bookmarks,readTime}) => {
   


    return (
        <div className="md:w-1/3 h-min space-y-5">
            <div className='bg-purple-50 rounded-xl p-5 outline outline-1  outline-purple-700'>
                <Read readTime={readTime}></Read>
            </div>
            <div className=' bg-gray-200 rounded-xl p-10'>
         <h2 className="text-2xl font-semibold mb-2">Bookmarked Blogs: {bookmarks.length}</h2>
            {
               bookmarks.map((bookmark,index) => <h4 key={index} className="text-xl font-semibold p-3 bg-white rounded-xl mb-1">{bookmark.title}</h4>) 
            }
            </div>
           
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks : PropTypes.array.isRequired
}


export default Bookmarks;