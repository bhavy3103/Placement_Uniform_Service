import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Layout } from '../components/shared/Layout';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../../api/AxiosUrl';
import { updateCurrentUser } from '@/redux/user/userSlice'; // Make sure the path is correct

const TrackUniform = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const [queryType, setQueryType] = useState('No Issue Found');
  const [queryDescription, setQueryDescription] = useState('No Description');

  useEffect(() => {
    if (currentUser.uniform.isIssue !== 'No Issue Found') {
      setQueryType(currentUser.uniform.isIssue);
      setQueryDescription(currentUser.uniform.issueDescription);
    }
  }, [currentUser.uniform.isIssue, currentUser.uniform.issueDescription]);

  const handleQueryTypeChange = (event) => {
    setQueryType(event.target.value);
  };

  const handleQueryDescriptionChange = (event) => {
    setQueryDescription(event.target.value);
  };

  const finalQueryDescription = queryType === 'Other' ? queryDescription : 'NA';


  const submitQuery = async () => {
    try {
      const data = {
        userId: currentUser._id,
        updateData: {
          uniform: {
            ...currentUser.uniform, // Spread the existing uniform object to retain previous values
            isIssue: queryType,
            issueDescription: finalQueryDescription,
          },
        },
      };

      const response = await axios.patch('/api/uniform/updateIssue', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.success) {
        toast.success('Query Submitted successfully');
        dispatch(updateCurrentUser(response.data.user));
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      toast.error('Error updating uniform issue: ' + error.message);
      console.error('Error updating uniform issue:', error.message);
    }
  };

  return (
    <Layout>
      <div className='m-2 p-2 text-lg font-semibold'>Uniform Details</div>
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
            className={`bg-gray-50 border-gray-300 text-sm rounded-lg border p-2.5 block dark:bg-gray-700 dark:border-gray-600 ${currentUser.uniform.firstInstallment === true
              ? 'text-green-500 border-green-600'
              : 'text-gray-900'
              }`}
            readOnly
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
            className={`bg-gray-50 border-gray-300 text-sm rounded-lg border p-2.5 block dark:bg-gray-700 dark:border-gray-600 ${currentUser.uniform.secondInstallment === true
              ? 'text-green-500 border-green-600'
              : 'text-gray-900'
              }`}
            readOnly
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
            id='isMeasurementDone'
            className={`bg-gray-50 border-gray-300 text-sm rounded-lg border p-2.5 block dark:bg-gray-700 dark:border-gray-600 ${currentUser.uniform.isMeasureMentDone === true
              ? 'text-green-500 border-green-600'
              : 'text-gray-900'
              }`}
            readOnly
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
            className={`bg-gray-50 border-gray-300 text-sm rounded-lg border p-2.5 block dark:bg-gray-700 dark:border-gray-600 ${currentUser.uniform.isArrived === true
              ? 'text-green-500 border-green-600'
              : 'text-gray-900'
              }`}
            readOnly
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
            className={`bg-gray-50 border-gray-300 text-sm rounded-lg border p-2.5 block dark:bg-gray-700 dark:border-gray-600 ${currentUser.uniform.isDistributed === true
              ? 'text-green-500 border-green-600'
              : 'text-gray-900'
              }`}
            readOnly
          />
        </div>
        {(<div>
          <label
            htmlFor='queryType'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Query Type
          </label>
          <select
            id='queryType'
            className='block w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500'
            value={queryType}
            onChange={handleQueryTypeChange}
          >
            <option value='No Issue Found'>No Issue Found</option>
            <option value='Size Mismatch'>Size Mismatch</option>
            <option value='Torn or Damaged'>Torn/Damage</option>
            <option value='Stains or Marks'>Stains/Marks</option>
            <option value='Defective Item'>Defective Item</option>
            <option value='Incomplete Set'>Incomplete Set</option>
            <option value='Other'>Other</option>
          </select>
          {queryType === 'Other' && (
            <div className='mt-2'>
              <label
                htmlFor='queryDescription'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Please specify:
              </label>
              <textarea
                id='queryDescription'
                className='block w-full p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500'
                rows='3'
                placeholder='Describe your issue...'
                onChange={handleQueryDescriptionChange}
                value={finalQueryDescription}
              ></textarea>
            </div>
          )}
          <button
            onClick={submitQuery}
            className='mt-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
          >
            Submit
          </button>
        </div>)}
      </div>
    </Layout>
  );
};

export default TrackUniform;
