// import React from 'react'
// import { combineSlices, current } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import Header from '@/components/SideHeader';
import { Layout } from '../components/Layout';

const Profile = () => {
  const { currentUser } = useSelector(state => state.user);
  const currentUserDetails = currentUser.data.message;
  console.log(currentUserDetails);

  return (
    <Layout>
      <div className="flex justify-center w-full ">
        <div className="relative">
          <button
            className="w-[140px] h-[140px] object-cover border-[2px]  border-blue-500 hover:border-blue-700  bg-gray-600 p-5 rounded-full  text-white text-6xl text-center cursor-default"
          >
            {currentUserDetails.fname[0] + currentUserDetails.lname[0]}

          </button>
        </div>
      </div>
      <div className="grid gap-6 mb-6 md:grid-cols-3 mt-2 mr-4">
        <div>
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
          <input
            type='text'
            placeholder='username'
            defaultValue={currentUserDetails.fname}
            id='fname'
            className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg border p-2.5 block w-full dark:bg-gray-700 dark:border-gray-600'
          // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="middle_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Middle name</label>
          <input
            type='text'
            placeholder='username'
            defaultValue={currentUserDetails.mname}
            id='mname'
            className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg border p-2.5 block w-full dark:bg-gray-700 dark:border-gray-600'
          // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
          <input
            type='text'
            placeholder='username'
            defaultValue={currentUserDetails.lname}
            id='lname'
            className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg border p-2.5 block w-full dark:bg-gray-700 dark:border-gray-600'
          // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="enrollment" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enrollment</label>
          <input
            type='number'
            placeholder='enrollment'
            defaultValue={currentUserDetails.enrollment}
            id='enrollment'
            className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg border p-2.5 block w-full dark:bg-gray-700 dark:border-gray-600'
          // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
          <input
            type='text'
            placeholder='Role'
            defaultValue={currentUserDetails.gender}
            id='role'
            className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg border p-2.5 block w-full dark:bg-gray-700 dark:border-gray-600'
          // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
          <input
            type='text'
            placeholder='department'
            defaultValue={currentUserDetails.department}
            id='department'
            className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg border p-2.5 block w-full dark:bg-gray-700 dark:border-gray-600'
          // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input
            type='text'
            placeholder='department'
            defaultValue={currentUserDetails.email}
            id='department'
            className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg border p-2.5 block w-full dark:bg-gray-700 dark:border-gray-600'
          // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone1</label>
          <input
            type='number'
            placeholder='phone1'
            defaultValue={currentUserDetails.phone1}
            id='phone1'
            className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg border p-2.5 block w-full dark:bg-gray-700 dark:border-gray-600'
          // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone2</label>
          <input
            type='number'
            placeholder='Phone2'
            defaultValue={currentUserDetails.phone2}
            id='phone2'
            className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg border p-2.5 block w-full dark:bg-gray-700 dark:border-gray-600'
          // onChange={handleChange}
          />
        </div>
      </div>
      <div className="m-2 p-2 text-lg font-semibold">Unifrom Details</div>
      <div className="flex flex-wrap gap-4 m-3">
        <div>
          <label htmlFor="firstInstallment" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Installment</label>
          <input
            type='text'
            placeholder='First Installment'
            defaultValue={currentUserDetails.uniform.firstInstallment ? 'Done' : 'Pending'}
            id='firstInstallment'
            className={`bg-gray-50 border-gray-300 text-sm rounded-lg border p-2.5 block dark:bg-gray-700 dark:border-gray-600 ${currentUserDetails.uniform.firstInstallment === true ? 'text-green-500 border-green-600' : 'text-gray-900'
              }`}
          // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="secondInstallment" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Second Installment</label>
          <input
            type='text'
            placeholder='Second Installment'
            defaultValue={currentUserDetails.uniform.secondInstallment ? 'Done' : 'Pending'}
            id='secondInstallment'
            className={`bg-gray-50 border-gray-300 text-sm rounded-lg border p-2.5 block dark:bg-gray-700 dark:border-gray-600 ${currentUserDetails.uniform.secondInstallment === true ? 'text-green-500 border-green-600' : 'text-gray-900'
              }`}
          // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="isMeasurementDone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Measurement Status</label>
          <input
            type='text'
            placeholder='Measurement status'
            defaultValue={currentUserDetails.uniform.isMeasureMentDone ? 'Done' : 'Pending'}
            id='isMeasureMentDone'
            className={`bg-gray-50 border-gray-300 text-sm rounded-lg border p-2.5 block dark:bg-gray-700 dark:border-gray-600 ${currentUserDetails.uniform.isMeasureMentDone === true ? 'text-green-500 border-green-600' : 'text-gray-900'
              }`}
          // onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="isArrived" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Arrived</label>
          <input
            type='text'
            placeholder='isArrived'
            defaultValue={currentUserDetails.uniform.isArrived ? 'Done' : 'Pending'}
            id='isArrived'
            className={`bg-gray-50 border-gray-300 text-sm rounded-lg border p-2.5 block dark:bg-gray-700 dark:border-gray-600 ${currentUserDetails.uniform.isArrived === true ? 'text-green-500 border-green-600' : 'text-gray-900'
              }`}
          // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="isDistributed" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Distributed</label>
          <input
            type='text'
            placeholder='Distributed'
            defaultValue={currentUserDetails.uniform.isDistributed ? 'Done' : 'Pending'}
            id='phone2'
            className={`bg-gray-50 border-gray-300 text-sm rounded-lg border p-2.5 block dark:bg-gray-700 dark:border-gray-600 ${currentUserDetails.uniform.isDistributed === true ? 'text-green-500 border-green-600' : 'text-gray-900'
              }`}
          // onChange={handleChange}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
