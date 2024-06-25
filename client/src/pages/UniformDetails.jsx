import Layout from '@/components/shared/Layout';
import Table from '@/components/shared/Table';
import { Button } from '@/components/ui/button';
import AxiosUrl from '../../api/AxiosUrl';
import { useState } from 'react';

const UniformDetails = () => {
  const [flag, setFlag] = useState(false);
  const [updatedData, setupdatedData] = useState([]);
  const editHandler = () => {
    setFlag(true);
  }

  const cancelHandler = () => {
    setFlag(false);
  }

  const updateDataBackend = async () => {
    window.location.reload();
    try {
      const res = await AxiosUrl.post('/api/uniform/updateUniform', updatedData);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const okHandler = () => {
    setFlag(false);
    updateDataBackend();
  }
  const updatefunc = (data) => {
    setupdatedData(data);
  }

  return (
    <Layout>
      <div className='container mx-auto'>
        <Table flag={flag} updatefunc={updatefunc} />
      </div>
      <div className='flex gap-2'>
        {!flag ? <Button className="my-4 mx-auto" onClick={editHandler}>Edit</Button> : <><Button className="my-4 flex-gap mx-auto" onClick={cancelHandler}>Cancel</Button><Button className="my-4 mx-auto" onClick={okHandler} >Save</Button></>}
      </div>
    </Layout>
  );
};

export default UniformDetails;
