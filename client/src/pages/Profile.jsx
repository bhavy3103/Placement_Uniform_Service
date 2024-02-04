import { useSelector } from 'react-redux';
import { Layout } from '../components/shared/Layout';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);

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
            // onChange={handleChange}
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
            // onChange={handleChange}
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
            // onChange={handleChange}
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
            // onChange={handleChange}
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
            // onChange={handleChange}
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
            // onChange={handleChange}
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
            // onChange={handleChange}
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
            // onChange={handleChange}
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
            // onChange={handleChange}
          />
        </div>
      </div>
      <div className='m-2 p-2 text-lg font-semibold'>Unifrom Details</div>
      <div className='flex flex-wrap gap-4 m-3'>
        <div>
          <label
            htmlFor='firstInstallment'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            First Installment
          </label>
          <input
            type='text'
            placeholder='First Installment'
            defaultValue={
              currentUser.uniform.firstInstallment ? 'Done' : 'Pending'
            }
            id='firstInstallment'
            className={`bg-gray-50 border-gray-300 text-sm rounded-lg border p-2.5 block dark:bg-gray-700 dark:border-gray-600 ${
              currentUser.uniform.firstInstallment === true
                ? 'text-green-500 border-green-600'
                : 'text-gray-900'
            }`}
            // onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor='secondInstallment'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Second Installment
          </label>
          <input
            type='text'
            placeholder='Second Installment'
            defaultValue={
              currentUser.uniform.secondInstallment ? 'Done' : 'Pending'
            }
            id='secondInstallment'
            className={`bg-gray-50 border-gray-300 text-sm rounded-lg border p-2.5 block dark:bg-gray-700 dark:border-gray-600 ${
              currentUser.uniform.secondInstallment === true
                ? 'text-green-500 border-green-600'
                : 'text-gray-900'
            }`}
            // onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor='isMeasurementDone'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Measurement Status
          </label>
          <input
            type='text'
            placeholder='Measurement status'
            defaultValue={
              currentUser.uniform.isMeasureMentDone ? 'Done' : 'Pending'
            }
            id='isMeasureMentDone'
            className={`bg-gray-50 border-gray-300 text-sm rounded-lg border p-2.5 block dark:bg-gray-700 dark:border-gray-600 ${
              currentUser.uniform.isMeasureMentDone === true
                ? 'text-green-500 border-green-600'
                : 'text-gray-900'
            }`}
            // onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor='isArrived'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Arrived
          </label>
          <input
            type='text'
            placeholder='isArrived'
            defaultValue={currentUser.uniform.isArrived ? 'Done' : 'Pending'}
            id='isArrived'
            className={`bg-gray-50 border-gray-300 text-sm rounded-lg border p-2.5 block dark:bg-gray-700 dark:border-gray-600 ${
              currentUser.uniform.isArrived === true
                ? 'text-green-500 border-green-600'
                : 'text-gray-900'
            }`}
            // onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor='isDistributed'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Distributed
          </label>
          <input
            type='text'
            placeholder='Distributed'
            defaultValue={
              currentUser.uniform.isDistributed ? 'Done' : 'Pending'
            }
            id='phone2'
            className={`bg-gray-50 border-gray-300 text-sm rounded-lg border p-2.5 block dark:bg-gray-700 dark:border-gray-600 ${
              currentUser.uniform.isDistributed === true
                ? 'text-green-500 border-green-600'
                : 'text-gray-900'
            }`}
            // onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor='query'>Is Query?</Label>
          <RadioGroup>
            <div className='flex justify-center items-center gap-2 mt-2'>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='no' id='r1' />
                <Label htmlFor='r1'>No</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='yes' id='r2' />
                <Label htmlFor='r2'>Yes</Label>
              </div>
            </div>
          </RadioGroup>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
