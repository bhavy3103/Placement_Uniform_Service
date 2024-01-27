import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const SideHeader = () => {
  const { currentUser } = useSelector(state => state.user);

  return (
    <div className='bg-slate-200 shadow-md h-screen w-1/5 fixed left-0 top-0'>
      <Link Link to='/' >
        <h1 className='font-bold text-2xl m-3 p-1'>
          <span className='text-slate-600'>Placement</span>
          <span className='text-slate-800'>Portal</span>
        </h1>
      </Link>

      <ul className='flex flex-col gap-0'>
        <Link to='/'>
          <li className='text-slate-700 text-xl ml-4 mr-3 p-2 hover:border border-gray-900 hover:bg-gray-300 hover:rounded-lg'>Home</li>
        </Link>
        <Link to='/about'>
          <li className='text-slate-700 text-xl ml-4 mr-3 p-2 hover:border border-gray-900 hover:bg-gray-300 hover:rounded-lg'>About</li>
        </Link>
      </ul>
    </div>
  );
}

export default SideHeader;
