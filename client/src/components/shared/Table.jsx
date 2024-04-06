import AxiosUrl from '../../../api/AxiosUrl';
import { useEffect, useState } from 'react';

const Table = (props) => {
  const [data, setData] = useState([]);
  const [permission, setpermission] = useState({read: true,write:false});
  const argument = props;

  const fetchData = async () => {
    try {
      const res = await AxiosUrl.get('/api/user/users');
      setData(res.data.data);
      // console.log(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const permissionHandler= ()=>{
    if(!argument.flag)
      setpermission({read:false,write:true})
    else
      setpermission({read: true,write:false})
  }

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
              Measurnment
            </th>
            <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>
              Arrived
            </th>
            <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>
              Distributed
            </th>
            <th className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>
              Query
            </th>
          </tr>
        </thead>
        <tbody>
          {data !== undefined && data.map((val, index) => {
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
                    {val.uniform !== undefined && Object.keys(val.uniform).filter(key =>key !== 'id' && key !== 'createdAt' && key !=='updatedAt' && key!=='_id' && key!=='__v' && key!=='isIssue').map((key)=>{
                      return(
                        <>
                        <td className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>
                        {!permission.write?<input type="checkbox" checked={val.uniform[key]} onChange={(e)=>{checkboxHandler(val.enrollment,key,e)}}/>:<input type="checkbox" checked={val.uniform[key]} readOnly/>}
                      </td>
                      </>
                      )
                    })}
                  <td className='border-b border-blue-gray-100 bg-blue-gray-50 p-3 text-center'>
                    {val.uniform.isIssue}
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