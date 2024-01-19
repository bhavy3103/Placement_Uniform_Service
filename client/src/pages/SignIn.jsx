import { Link } from "react-router-dom"

const SignIn = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form className='flex flex-col gap-4'>
        <input type="username" placeholder='username' className=' text-lg border rounded-xl p-3 hover:shadow-md' id='username' />
        <input type="password" placeholder='Password' className=' text-lg border rounded-xl p-3 hover:shadow-md' id='password' />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-70'>
          Sign In
        </button>
      </form>
      <div className='flex gap-2 mt-4'>
        <p> Forgot password?</p>
        <Link to={'/forgot-pass'}>
          <span className='text-blue-700'>Click here</span>
        </Link>
      </div>
    </div >
  )
}

export default SignIn
