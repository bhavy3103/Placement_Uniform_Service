import { Link } from 'react-router-dom';

const Header = () => {

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
          <Link to='sign-in'>
            <li className='hidden  sm:inline hover:underline text-slate-700'>SignIn</li>
          </Link>
        </ul>
      </div>
    </header >
  )
}

export default Header
