// TopHeader.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const TopHeader = () => {
  const { currentUser } = useSelector(state => state.user);

  return (
    <div className="flex justify-end mt-2 mr-2">
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
        currentUser ? (<button className='font-semibold border border-blue-500  hover:border-blue-700 bg-gray-800 text-white p-2 m-2 rounded-lg hover:underline text-slate-700'>
          Signout
        </button>) : " "
      }

    </div>
  );
}

export default TopHeader;
