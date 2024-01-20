import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type="username" placeholder='username' className=' text-lg border rounded-xl p-3 hover:shadow-md' id='username' />
        <input type="password" placeholder='Password' className=' text-lg border rounded-xl p-3 hover:shadow-md' id='password' />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-70'>
          Sign Up
        </button>
      </form>
      <div className="flex flex-row justify-between">
        <div className='flex gap-2 mt-5'>
          <p>have an account?</p>
          <Link to={'/sign-in'}>
            <span className='text-blue-700'>Sign in</span>
          </Link>
        </div>
        <div className='flex gap-2 mt-5'>
          <Link to={'/forgot-pass'}>
            <span className='text-blue-700'>Forgot Password?</span>
          </Link>
        </div>
      </div>
    </div >
  )
}

export default SignUp
