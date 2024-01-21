import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form className='flex flex-col gap-4'>
        <input
          type='username'
          placeholder='Enrollment'
          className=' text-lg border rounded-xl p-3 hover:shadow-md'
          id='enrollment'
        />
        <input
          type='password'
          placeholder='Password'
          className=' text-lg border rounded-xl p-3 hover:shadow-md'
          id='password'
        />
        <Button>Sign in</Button>
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
