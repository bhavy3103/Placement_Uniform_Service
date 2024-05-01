import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div className='bg-slate-300 border-r px-2 py-4 shadow-lg h-screen overflow-auto w-[16rem] left-0 z-0 top-16'>
      <ul className='flex flex-col gap-0'>
        <Link to='/'>
          <li className='text-slate-700 text-xl ml-4 mr-3 p-2 hover:border border-gray-900 hover:bg-gray-300 hover:rounded-lg'>
            Home
          </li>
        </Link>
        <Link to='/about'>
          <li className='text-slate-700 text-xl ml-4 mr-3 p-2 hover:border border-gray-900 hover:bg-gray-300 hover:rounded-lg'>
            About
          </li>
        </Link>
        <Link to='/chats'>
          <li className='text-slate-700 text-xl ml-4 mr-3 p-2 hover:border border-gray-900 hover:bg-gray-300 hover:rounded-lg'>
            Chats
          </li>
        </Link>
        <Link to='/uniform-details'>
          <li className='text-slate-700 text-xl ml-4 mr-3 p-2 hover:border border-gray-900 hover:bg-gray-300 hover:rounded-lg'>
            Uniforms
          </li>
        </Link>
        <Link to='/track-uniform'>
          <li className='text-slate-700 text-xl ml-4 mr-3 p-2 hover:border border-gray-900 hover:bg-gray-300 hover:rounded-lg'>
            Track My Uniform
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
