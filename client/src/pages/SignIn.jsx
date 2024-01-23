import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import AxiosUrl from '../../api/AxiosUrl';

const SignIn = () => {
  const [enrollment, setEnrollment] = useState();
  const [password, setPassword] = useState();

  const testApi = async (e) => {
    e.preventDefault();
    try {
      const res = await AxiosUrl.post('/api/auth/signin', {
        enrollment: enrollment,
        password: password,
      });
      console.log(res);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form className='flex flex-col gap-4'>
        <input
          type='username'
          placeholder='Enrollment'
          className=' text-lg border rounded-xl p-3 hover:shadow-md'
          id='enrollment'
          onChange={(e) => {
            setEnrollment(e.target.value);
          }}
        />
        <input
          type='password'
          placeholder='Password'
          className=' text-lg border rounded-xl p-3 hover:shadow-md'
          id='password'
          autoComplete='true'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button onClick={testApi}>Sign in</Button>
      </form>
      <div className='flex flex-row justify-between'>
        {/* <div className='flex gap-2 mt-5'>
          <p>Don't have an account?</p>
          <Link to={'/sign-up'}>
            <span className='text-blue-700'>Sign up</span>
          </Link>
        </div> */}
        <div className='flex gap-2 mt-5'>
          <Link to={'/forgot-pass'}>
            <span className='text-blue-700'>Forgot Password?</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
