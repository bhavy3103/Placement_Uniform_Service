
// import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOutUserStart, signOutUserSuccess, signOutUserFailure } from '@/redux/user/userSlice';
import axios from "../../api/AxiosUrl"

export const TopHeader = () => {
  const { currentUser } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());

      const response = await axios.get('/api/auth/signout');

      if (response.data.success === false) {
        dispatch(signOutUserFailure(response.data.message));
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
    <div className="flex justify-end mt-2 ml-auto w-4/5">
      <Link to='/profile'>
        {currentUser ? (
          <button className="border border-blue-500 hover:border-blue-700 bg-gray-800 text-white p-2 m-2 rounded-full hover:underline text-slate-700">
            {currentUser.data.message.fname[0] + currentUser.data.message.lname[0]}
          </button>
        ) : (
          <div className='font-semibold border border-blue-500  hover:border-blue-700 bg-gray-800 text-white p-2 m-2 rounded-lg hover:underline text-slate-700'>Sign In</div>
        )}
      </Link>
      {
        currentUser ? (<span onClick={handleSignOut} className='font-semibold border border-blue-500  hover:border-blue-700 bg-gray-800 text-white p-2 m-2 rounded-lg hover:underline text-slate-700 cursor-pointer'>
          Signout
        </span>) : " "
      }

    </div>
  );
}

export default TopHeader;
