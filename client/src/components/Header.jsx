import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { current } from '@reduxjs/toolkit';

const Header = () => {
  const { currentUser } = useSelector(state => state.user);
  // console.log(currentUser);
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-2 h-14' >
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-600'>Placement</span>
            <span className='text-slate-800'>Portal</span>
          </h1>
        </Link>

        <form className='bg-slate-100 p-3 rounded-lg flex items-center h-10 hover:shadow-md' >
          <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-68 ' />
        </form>

        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden  sm:inline hover:underline text-slate-700'>Home</li>
          </Link>
          <Link to='about'>
            <li className='hidden  sm:inline hover:underline text-slate-700'>About</li>
          </Link>
          <Link to='/profile'>
            {
              currentUser ? (
                // give me rounded circle which contain first character of user name 
                <button className="border border-blue-500 hover:border-blue-700  bg-gray-800 text-white p-0 rounded-full h-7 w-7 hover:underline text-slate-700">
                  {currentUser.data.message.fname[0] + currentUser.data.message.lname[0]}
                </button>
              ) :
                (<li className='hidden  sm:inline hover:underline text-slate-700'>Sign In</li>
                )}
          </Link>
        </ul>
      </div>
    </header >
  )
}

export default Header
