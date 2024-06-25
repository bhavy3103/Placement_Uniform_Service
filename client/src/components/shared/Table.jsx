import AxiosUrl from '../../../api/AxiosUrl';
import { useEffect, useState } from 'react';

const Table = (props) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [permission, setpermission] = useState({ read: true, write: false });
  const [selectedQuery, setSelectedQuery] = useState('');
  const argument = props;

  const fetchData = async () => {
    try {
      const res = await AxiosUrl.get('/api/user/users');
      setData(res.data.data);
      setFilteredData(res.data.data); // Initially set filteredData to all data
    } catch (error) {
      console.log(error.message);
    }
  };

  const permissionHandler = () => {
    if (!argument.flag) setpermission({ read: false, write: true });
    else setpermission({ read: true, write: false });
  };

  useEffect(() => {
    fetchData();
    permissionHandler();
  }, [argument.flag]);

  const checkboxHandler = (enrollment, key) => {
    setData((prevData) => {
      const newData = prevData.map((item) => {
        return item.enrollment === enrollment
          ? {
            ...item,
            uniform: {
              ...item.uniform,
              [key]: !item.uniform[key],
            },
          }
          : item;
      });

      argument.updatefunc(newData);
      return newData;
    });
  };

  // Filter data based on selected query
  useEffect(() => {
    if (selectedQuery === '') {
      setFilteredData(data); // If no query is selected, show all data
    } else {
      // Filter data based on the selected query
      const filtered = data.filter((student) => student.uniform.isIssue === selectedQuery);
      setFilteredData(filtered);
    }
  }, [selectedQuery, data]);

  // Calculate the sum of occurrences for each query type
  const calculateSum = () => {
    const sum = filteredData.reduce((acc, student) => {
      const issue = student.uniform.isIssue;
      acc[issue] = (acc[issue] || 0) + 1;
      return acc;
    }, {});
    return sum;
  };

  return (
    <>
      <div className=" rounded-md p-2 flex items-center">
        {/* Filter dropdown */}
        <select className="mr-2 bg-blue-50 border border-blue-300 rounded-md px-2 py-1" onChange={(e) => setSelectedQuery(e.target.value)}>
          <option value="">Filter Query</option>
          <option value='No Issue Found'>No Issue Found</option>
          <option value='Size Mismatch'>Size Mismatch</option>
          <option value='Torn or Damaged'>Torn/Damage</option>
          <option value='Stains or Marks'>Stains/Marks</option>
          <option value='Defective Item'>Defective Item</option>
          <option value='Incomplete Set'>Incomplete Set</option>
          <option value='Other'>Other</option>
          <option value="">Clear Filter</option>
        </select>
        {/* Button to calculate sum */}
        {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md" onClick={() => console.log(calculateSum())}>
          Calculate Sum
        </button> */}
      </div >
      <table className='w-full min-w-max table-auto text-left'>
        <thead>
          <tr>
            <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>Sr.no</th>
            <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>Enroll</th>
            <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>Name</th>
            <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>1<sup>st</sup>Installment</th>
            <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>2<sup>nd</sup>Installment</th>
            <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>Measurnment</th>
            <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>Arrived</th>
            <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>Distributed</th>
            <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>Issue</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((val, index) => (
            <tr key={index}>
              <td className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>{index + 1}</td>
              <td className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>{val.enrollment}</td>
              <td className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>{val.fname}</td>
              {Object.keys(val.uniform)
                .filter((key) => key !== 'id' && key !== 'createdAt' && key !== 'updatedAt' && key !== '_id' && key !== '__v' && key !== 'isIssue' && key != 'issueDescription')
                .map((key) => (
                  <td className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center' key={key}>
                    {!permission.write ? (
                      <input type="checkbox" checked={val.uniform[key]} onChange={(e) => checkboxHandler(val.enrollment, key, e)} />
                    ) : (
                      <input type="checkbox" checked={val.uniform[key]} readOnly />
                    )}
                  </td>
                ))}
              <td className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>
                {val.uniform.isIssue !== "Other" ? val.uniform.isIssue : val.uniform.issueDescription}
              </td>
            </tr>
          ))}
        </tbody>
        {/* Table footer to display the sum */}
        <tfoot>
          <tr>
            <td colSpan="8" className='border-t border-blue-gray-100 bg-blue-gray-50 p-3 text-center'></td>
            <td className='border-t border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>
              {Object.entries(calculateSum()).map(([query, count]) => (
                <div key={query}>{`${query}: ${count}`}</div>
              ))}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default Table;
