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
    <div className='flex justify-end items-center mt-2 ml-auto w-4/5 px-6'>
      {isAuthenticated && (
        <Link to='/profile'>
          <button className='border border-blue-500 hover:border-blue-700 bg-gray-800 text-white p-2 m-2 rounded-full hover:underline'>
            {currentUser?.fname[0] + currentUser?.lname[0]}
          </button>
        </Link>
      )}
      {isAuthenticated && <Button onClick={signoutHandler}>Sign out</Button>}
      {!isAuthenticated && (
        <Link to='/sign-in'>
          <Button>
            Sign in
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
