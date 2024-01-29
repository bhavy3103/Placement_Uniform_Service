import AxiosUrl from "../../../api/AxiosUrl";
import { useState } from "react";

const Table = ()=>{
    const [data,setData] = useState("");
    
    const fetchData =async ()=>{
        try {
            const res = await AxiosUrl.get("/api/user/users");
            setData(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error.message);
        }
    };
    fetchData();
    return(
        <>
        <table className="w-full min-w-max table-auto text-left">
            <thead>
                <tr>
                {/* <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Sr.no</th> */}
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Enroll</th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Name</th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">1</th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">2</th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">3</th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">4</th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">5</th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">6</th>
                </tr>
            </thead>
            <tbody>
                {data.map((val,index)=>{
                   return <><tr>
                   <td className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">{val.enrollment}</td>
                    <td className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">{val.fname}</td>
                        <td key={index} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                        <td className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">{val.uniform.firstInstallment}</td>
                        <td className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">{val.uniform.
isArrived}</td>
                        <td className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">{val.uniform.isDistributed
}</td>
                        <td className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">{val.uniform.isIssue}</td>
                        <td className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">{val.uniform.isMeasureMentDone}</td>
                        <td className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">{val.uniform.secondInstallment}</td>
                    </td>
                    </tr></>
                })}
            </tbody>
        </table>
        </>
    )
}

export default Table;