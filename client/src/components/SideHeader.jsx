import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const SideHeader = () => {
  const { currentUser } = useSelector(state => state.user);

  return (
    <aside className='bg-slate-200 shadow-md h-screen fixed left-0 top-0'>
      <div className='flex flex-col items-center justify-between max-w-6xl mx-auto p-2 h-full'>
        <div>
          <Link to='/'>
            <h1 className='font-bold text-xl mb-4'>
              <span className='text-slate-600'>Placement</span>
              <span className='text-slate-800'>Portal</span>
            </h1>
          </Link>

          <ul className='flex flex-col gap-4'>
            <Link to='/'>
              <li className='hover:underline text-slate-700'>Home</li>
            </Link>
            <Link to='/about'>
              <li className='hover:underline text-slate-700'>About</li>
            </Link>
          </ul>
        </div>


      </div>
    </aside>
  );
}

export default SideHeader;
