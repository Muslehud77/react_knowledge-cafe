
import PropTypes from 'prop-types';

const Read = ({readTime}) => {

   const displayTime = () =>{
     if(readTime.length !== 0){
        const sum = readTime.reduce((a,b) => parseInt(a)+parseInt(b), 0);
        return sum;
    }else{
        return 0;
    }
   }
    
    return (
        <div>
            <h4 className='text-2xl font-semibold text-purple-700 text-center'>Spent Time on read: {displayTime()} min</h4>
        </div>
    );
};

Read.propTypes = {
    readTime: PropTypes.array.isRequired
};

export default Read;