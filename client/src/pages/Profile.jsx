import { useSelector } from 'react-redux';
import { Layout } from '../components/shared/Layout';

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);

  // console.log(currentUser);


  return (
    <Layout>
      <div className='flex justify-center w-full '>
        <div className='relative'>
          <button className='w-[140px] h-[140px] object-cover border-[2px]  border-blue-500 hover:border-blue-700  bg-gray-600 p-5 rounded-full  text-white text-6xl text-center cursor-default'>
            {currentUser.fname[0] + currentUser.lname[0]}
          </button>
        </div>
      </div>
      <div className='grid gap-6 mb-6 md:grid-cols-3 mt-2 mr-4'>
        <div>
          <label
            htmlFor='first_name'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            First name
          </label>
          <input
            type='text'
            placeholder='username'
            defaultValue={currentUser.fname}
            id='fname'
            className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg border p-2.5 block w-full dark:bg-gray-700 dark:border-gray-600'
            readOnly
          />
        </div>
        <div>
          <label
            htmlFor='middle_name'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Middle name
          </label>
          <input
            type='text'
            placeholder='username'
            defaultValue={currentUser.mname}
            id='mname'
            className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg border p-2.5 block w-full dark:bg-gray-700 dark:border-gray-600'
            readOnly
          />
        </div>
        <div>
          <label
            htmlFor='last_name'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Last name
          </label>
          <input
            type='text'
            placeholder='username'
            defaultValue={currentUser.lname}
            id='lname'
            className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg border p-2.5 block w-full dark:bg-gray-700 dark:border-gray-600'
            readOnly
          />
        </div>
        <div>
          <label
            htmlFor='enrollment'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Enrollment
          </label>
          <input
            type='number'
            placeholder='enrollment'
            defaultValue={currentUser.enrollment}
            id='enrollment'
            className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg border p-2.5 block w-full dark:bg-gray-700 dark:border-gray-600'
            readOnly
          />
        </div>
        <div>
          <label
            htmlFor='gender'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Gender
          </label>
          <input
            type='text'
            placeholder='Role'
            defaultValue={currentUser.gender}
            id='role'
            className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg border p-2.5 block w-full dark:bg-gray-700 dark:border-gray-600'
            readOnly
          />
        </div>
        <div>
          <label
            htmlFor='department'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Department
          </label>
          <input
            type='text'
            placeholder='department'
            defaultValue={currentUser.department}
            id='department'
            className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg border p-2.5 block w-full dark:bg-gray-700 dark:border-gray-600'
            readOnly
          />
        </div>
        <div>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Email
          </label>
          <input
            type='text'
            placeholder='department'
            defaultValue={currentUser.email}
            id='department'
            className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg border p-2.5 block w-full dark:bg-gray-700 dark:border-gray-600'
            readOnly
          />
        </div>
        <div>
          <label
            htmlFor='phone1'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Phone1
          </label>
          <input
            type='number'
            placeholder='phone1'
            defaultValue={currentUser.phone1}
            id='phone1'
            className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg border p-2.5 block w-full dark:bg-gray-700 dark:border-gray-600'
            readOnly
          />
        </div>
        <div>
          <label
            htmlFor='phone2'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Phone2
          </label>
          <input
            type='number'
            placeholder='Phone2'
            defaultValue={currentUser.phone2}
            id='phone2'
            className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg border p-2.5 block w-full dark:bg-gray-700 dark:border-gray-600'
            readOnly
          />
        </div>
      </div>

    </Layout >
  );
};

export default Profile;
