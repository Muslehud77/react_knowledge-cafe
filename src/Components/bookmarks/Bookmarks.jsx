
import { PropTypes } from 'prop-types';


const Bookmarks = ({bookmarks}) => {
    


    return (
        <div className="md:w-1/3">
            <h2 className="text-2xl font-semibold">Bookmarks: {bookmarks.length}</h2>
            {
               bookmarks.map(bookmark => <h4 className="text-xl font-semibold">{bookmark}</h4>) 
            }
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks : PropTypes.array.isRequired
}


export default Bookmarks;