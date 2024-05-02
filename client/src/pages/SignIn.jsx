import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AxiosUrl from '../../api/AxiosUrl';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice.js';
import Loader from '@/components/style/Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const SignIn = () => {
  const [enrollment, setEnrollment] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.user);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await AxiosUrl.post('/api/auth/signin', {
        enrollment: enrollment,
        password: password,
      });
      console.log(res);
      if (!res.data.success) {
        dispatch(signInFailure(res.status));
        return;
      }
      dispatch(signInSuccess(res.data.message));
      toast.success("Sign in Successfully");
      navigate('/');
      window.localStorage.setItem("token", res.data.token);
    } catch (error) {
      const Credential = 'Wrong Credential';
      dispatch(signInFailure(Credential));
    }
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className='p-3 max-w-lg mx-auto'>
          <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
          <form className='flex flex-col gap-4' onSubmit={submitHandler}>
            <input
              type='number'
              placeholder='Username'
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
          {error && <p className='text-red-500 mt-5'>{error}</p>}
        </div>
      )}
    </div>
  );
};

export default SignIn;
