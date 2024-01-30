import Layout from '@/components/shared/Layout';
import Table from '@/components/shared/Table';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
const UniformDetails = () => {
  const [flag,setFlag] = useState(false);
  const editHandler = ()=>{
      setFlag(true);
  }

  const handleUpdatePermission = ()=>{
    setFlag(false);
  }
  // console.log(flag);

  return (
    <Layout>
      <div className='container mx-auto'>
        <Table flag={flag}/>
      </div>
      <div className='flex justify-center flex-gap-0'>
        {!flag?<Button className="my-4 mx-auto" onClick={editHandler}>Edit</Button>:<><Button className="my-4 flex-gap mx-auto" onClick={handleUpdatePermission}>cancel</Button><Button className="my-4 mx-auto" onClick={handleUpdatePermission}>OK</Button></>}
      </div>
    </Layout>
  );
};

export default UniformDetails;
