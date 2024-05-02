import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signOutUserStart,
  signOutUserSuccess,
  signOutUserFailure,
} from '@/redux/user/userSlice';
import axios from '../../../api/AxiosUrl';
import { Button } from '../ui/button';

export const Navbar = () => {
  const { currentUser, isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const signoutHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(signOutUserStart());

      const response = await axios.get('/api/auth/signout');
      console.log(response.statusText);

      if (!response.statusText) {
        dispatch(signOutUserFailure(response.status));
        return;
      }

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
              Placement
            </span>
            <span className='text-slate-100'>Portal</span>
          </h1>
        </Link>
      )}
      {isAuthenticated && <Button onClick={signoutHandler}>Sign out</Button>}
      {!isAuthenticated && (
        <Link to='/sign-in'>
          <Button>
            Sign in
          </Button>
        )}
        {!isAuthenticated && (
          <Link to='/sign-in'>
            <Button className='text-lg bg-transparent ring-1 border-none ring-sky-500 font-semibold text-sky-500 px-3 py-1.5 transition-all duration-200 hover:bg-sky-500 hover:text-white'>
              Sign in
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
