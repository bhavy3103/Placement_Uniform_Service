import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signOutUserStart,
  signOutUserSuccess,
  signOutUserFailure,
} from '@/redux/user/userSlice';
// import axios from '../../../api/AxiosUrl';
// import { Button } from '../ui/button';
import AxiosUrl from '../../../api/AxiosUrl';

export const Navbar = () => {
  const { currentUser, isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signoutHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(signOutUserStart());

      const response = await AxiosUrl.get('/api/auth/signout');
      console.log(response.statusText);

      if (!response.statusText) {
        dispatch(signOutUserFailure(response.status));
        return;
      }

      navigate('/sign-in');
      dispatch(signOutUserSuccess());
      window.location.reload();
    } catch (error) {
      dispatch(signOutUserFailure(error.message));
      console.error(error.message);
    }
  };

  return (
    <div className='flex justify-between gap-3 items-center sticky top-0 bg-gray-800 w-full px-10 h-16 z-30 shadow-xl'>
      <div className='flex justify-center items-center'>
        <Link Link to='/'>
          <h1 className='font-bold text-3xl'>
            <span className='bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text text-transparent'>
              Uniform
            </span>
            <span className='text-slate-100'>Service</span>
          </h1>
        </Link>
      </div>

      <div className='flex justify-center items-center gap-4'>
        {isAuthenticated && (
          <Link to='/profile'>
            <button className='border border-sky-400 hover:border-sky-200 text-sky-400 hover:ring-2 hover:text-sky-200 h-12 w-12 text-xl font-semibold flex justify-center items-center rounded-full transition-all duration-300'>
              {currentUser?.fname[0] + currentUser?.lname[0]}
            </button>
          </Link>
        )}
        {isAuthenticated && (
          <Link
            onClick={signoutHandler}
            className='text-lg bg-transparent rounded-md ring-1 border-none ring-rose-500 font-semibold text-rose-500 px-3 py-1.5 transition-all duration-200 hover:bg-rose-500 hover:text-white'
          >
            Sign out
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
