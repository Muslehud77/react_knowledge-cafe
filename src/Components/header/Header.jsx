
import profile from '../../images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center border-b-2 py-5 mb-5'>
            <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;