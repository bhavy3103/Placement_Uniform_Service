import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { currentUser, isAuthenticated } = useSelector((state) => state.user);
  console.log(currentUser, isAuthenticated);

  return (
    <nav className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-2 h-14'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-600'>Placement</span>
            <span className='text-slate-800'>Portal</span>
          </h1>
        </Link>

        <form className='bg-slate-100 p-3 rounded-lg flex items-center h-10 hover:shadow-md'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-68 '
          />
        </form>

        <ul className='flex gap-4'>
          <Link
            to='about'
            className='hidden sm:inline hover:underline text-slate-700'
          >
            About
          </Link>
          {isAuthenticated ? (
            <Link
              to='/profile'
              className='border border-blue-500 hover:border-blue-700  bg-gray-800 text-white p-0 rounded-full h-7 w-7 hover:underline'
            >
              {currentUser?.fname[0] + currentUser?.lname[0]}
            </Link>
          ) : (
            <Link to='/sign-in' className='hidden  sm:inline hover:underline text-slate-700'>
              Sign In
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
