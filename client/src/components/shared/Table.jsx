import AxiosUrl from '../../../api/AxiosUrl';
import { useEffect, useState } from 'react';

const Table = (props) => {
  const [data, setData] = useState([]);
  const [permission, setpermission] = useState({read: true,write:false});
  const argument = props;

  const permissionHandler= ()=>{
    if(!argument.flag)
      setpermission({read:false,write:true})
    else
      setpermission({read: true,write:false})
  }
  // console.log(permission);
  const fetchData = async () => {
    try {
      const res = await AxiosUrl.get('/api/user/users');
      setData(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleSelectChange = (e)=>{
    console.log(e.target.value);
  }
  useEffect(() => {
    fetchData();
    permissionHandler(); 
  }, [argument.flag]);
  
  return (
    <>
      <table className='w-full min-w-max table-auto text-left'>
        <thead>
          <tr>
            <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>
              Sr.no
            </th>
            <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>
              Enroll
            </th>
            <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>
              Name
            </th>
            <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>
              1<sup>st</sup>Installment
            </th>
            <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>
              2<sup>nd</sup>Installment
            </th>
            <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>
              Arrived
            </th>
            <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>
              Distributed
            </th>
            <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>
              Measurnment
            </th>
            <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>
              Query
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, index) => {
            return (
              <tr key={index}>
                <td className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>
                  {index + 1}
                </td>
                <td className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>
                  {val.enrollment}
                </td>
                <td className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>
                  {val.fname}
                </td>
                <td className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>
                  {!permission.write?<input type="checkbox" name="first_installment" id="first_installment"/>:<input type="checkbox" name="first_installment" id="first_installment" checked={val.uniform.firstInstallment} readOnly/>}
                </td>
                <td className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>
                  {!permission.write?<input type="checkbox" name="second_installment" id="second_installment" />:<input type="checkbox" name="second_installment" id="second_installment" checked={val.uniform.secondInstallment} readOnly/>}
                </td>
                <td className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>
                  {!permission.write ?<input type="checkbox" name="arrived" id="arrived" />:<input type="checkbox" name="arrived" id="arrived" checked={val.uniform.isArrived} readOnly/>}
                </td>
                <td className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>
                  {!permission.write?<input type="checkbox" name="distributed" id="distributed" />:<input type="checkbox" name="distributed" id="distributed" checked={val.uniform.isDistributed} readOnly/>}
                </td>
                <td className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>
                  {!permission.write?<input type="checkbox" name="measurment" id="measurment" />:<input type="checkbox" name="measurment" id="measurment" checked={val.uniform.isMeasureMentDone} readOnly/>}
                </td>
                <td className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>
                  {!permission.write?<select id="dropdown"  onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>:val.uniform.isIssue}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
