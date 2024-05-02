import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Layout } from '../components/shared/Layout';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../../api/AxiosUrl';

const TrackUniform = () => {
  const { currentUser } = useSelector((state) => state.user);

  const [queryType, setQueryType] = useState(() => {
    // Retrieve the saved queryType from local storage or default to 'No Issue Found'
    return localStorage.getItem('queryType') || 'No Issue Found';
  });
  const [queryDescription, setQueryDescription] = useState(() => {
    return localStorage.getItem('queryDescription') || 'No Description';
  });
  // console.log(queryDescription);

  useEffect(() => {
    localStorage.setItem('queryType', queryType);
  }, [queryType]);

  useEffect(() => {
    localStorage.setItem('queryDescription', queryDescription);
  }, [queryDescription]);

  const handleQueryTypeChange = (event) => {
    const selectedType = event.target.value;
    setQueryType(selectedType);
  };

  const handleQueryDescriptionChange = (event) => {
    const description = event.target.value;
    setQueryDescription(description);
  };

  const submitQuery = async () => {
    try {
      // Define the data to be sent in the request body
      let data = {};
      if (queryType === 'other') {
        // Include the description if queryType is 'other'
        data = {
          isIssue: queryDescription, // Send the description instead of 'other'
        };
      } else {
        data = {
          isIssue: queryType,
        };
      }

      // console.log(data);

      // Make the POST request
      const response = await axios.patch('/api/uniform/updateIssue', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        // Handle success
        toast.success('Query Submitted successfully');
      } else {
        // Handle failure
        throw new Error(response.data.message);
      }
    } catch (error) {
      // Handle any errors that occurred during the request
      toast.error('Error updating uniform issue: ' + error.message);

      console.error('Error updating uniform issue:', error.message);
    }
  };

  return (
    <Layout>
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
            readOnly
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
            readOnly
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
            readOnly
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
            readOnly
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
            readOnly
          />
        </div>
        <div className='flex items-center'>
          {currentUser.uniform.isDistributed && (
            <div className='flex flex-col justify-center'>
              <label
                htmlFor='query'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Is Any Query regarding uniform?
              </label>
              <select
                id='query'
                defaultValue={queryType}
                className='block w-full py-2 px-3 border  border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500'
                onChange={handleQueryTypeChange}
              >
                <option value='No Issue Found'>No Issue Found</option>
                <option value='unfit'>Size Unfit</option>
                <option value='missing'>Missing</option>
                <option value='torned'>Torned</option>
                <option value='other'>Other</option>
              </select>
              {/* Check if the selected query type is "Other" */}
              <div className='mt-3 flex flex-row justify-center items-center gap-6'>
                {queryType === 'other' && (
                  <div>
                    <label className='block mb-2 text-sm font-medium text-gray-900'>
                      Please specify:
                    </label>
                    <textarea
                      id='queryDescription'
                      className='block w-full p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500'
                      rows='3'
                      placeholder='Describe your issue...'
                      onChange={handleQueryDescriptionChange}
                    ></textarea>
                  </div>
                )}
                {/* Submit Button */}
                <button
                  onClick={submitQuery}
                  className='mt-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default TrackUniform;
