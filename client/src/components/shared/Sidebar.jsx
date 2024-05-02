import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Sidebar = () => {
  const { currentUser, isAuthenticated } = useSelector((state) => state.user);

  let role;
  if (isAuthenticated) {
    role = currentUser.role;
  }
  // console.log(role);

  const location = useLocation();


  return (
    <div className='bg-slate-300 border-r px-2 py-4 shadow-lg h-screen overflow-auto w-[16rem] left-0 z-0 top-16'>
      <ul className='flex flex-col gap-2'>
        <Link to='/'>
          <li className={`text-slate-700 text-xl ml-4 mr-3 p-2 hover:border border-gray-900 hover:bg-gray-300 hover:rounded-lg ${location.pathname === '/' ? 'bg-gray-400 rounded-lg' : ''}`}>
            Home
          </li>
        </Link>
        <Link to='/about'>
          <li className={`text-slate-700 text-xl ml-4 mr-3 p-2 hover:border border-gray-900 hover:bg-gray-300 hover:rounded-lg ${location.pathname === '/about' ? 'bg-gray-400 rounded-lg' : ''}`}>
            About
          </li>
        </Link>
        <Link to='/chats'>
          <li className={`text-slate-700 text-xl ml-4 mr-3 p-2 hover:border border-gray-900 hover:bg-gray-300 hover:rounded-lg ${location.pathname === '/chats' ? 'bg-gray-400 rounded-lg' : ''}`}>
            Chats
          </li>
        </Link>
        <Link to='/studentlist'>
          <li className={`text-slate-700 text-xl ml-4 mr-3 p-2 hover:border border-gray-900 hover:bg-gray-300 hover:rounded-lg ${location.pathname === '/studentlist' ? 'bg-gray-400 rounded-lg' : ''}`}>
            Student List
          </li>
        </Link>
        {(role === "admin") &&
          <Link to='/uniform-details'>
            <li className={`text-slate-700 text-xl ml-4 mr-3 p-2 hover:border border-gray-900 hover:bg-gray-300 hover:rounded-lg ${location.pathname === '/uniform-details' ? 'bg-gray-400 rounded-lg' : ''}`}>
              Uniforms
            </li>
          </Link>
        }
        {(role === "student") &&
          <Link to='/track-uniform'>
            <li className={`text-slate-700 text-xl ml-4 mr-3 p-2 hover:border border-gray-900 hover:bg-gray-300 hover:rounded-lg ${location.pathname === '/track-uniform' ? 'bg-gray-400 rounded-lg' : ''}`}>
              Track My Uniform
            </li>
          </Link>
        }
      </ul>
    </div >
  );
};

export default Sidebar;
