
import { FaApple, FaPhone,  } from 'react-icons/fa'
import loginImg from '../../assets/img/login.png'
import logo from '../../assets/img/logo.png'
import { FcGoogle } from 'react-icons/fc'


import { Link } from 'react-router-dom'

const SignUp = () => {

  return (
    <div className='bg-white min-h-screen w-full mb-5 flex justify-center items-center '>
        <div  className='grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow'>
            {/* login form */}
            <div className='p-10 flex flex-col justify-center '>
              <div className='flex items-center justify-center text-center'>
                <img className='h-8 w-8 text-pink-700' src={logo} alt="" />
                <h1 className='text-pink-900 font-bold text-xl '> WeztechBD</h1>
              </div>
              <h2 className='font-bold text-2xl'>Welcome Back</h2>
              <p className='text-gray-500 mb-6'>Let’s login to grab amazing deal</p>
              
              {/* buttons */}
              <button className='flex items-center justify-center w-full py-2 mb-3 border rounded-lg hover:bg-gray-100 transition cursor-pointer'><FcGoogle className='mr-2 '/> Continue with Google</button>
              <button className='flex items-center justify-center w-full py-2 mb-3 border rounded-lg hover:bg-gray-100 transition cursor-pointer'><FaApple className='mr-2 '/> Continue with Apple</button>
              <button className='flex items-center justify-center w-full py-2 mb-3 border rounded-lg hover:bg-gray-100 transition cursor-pointer'><FaPhone className='mr-2 '/> Continue with Email/Phone</button>

              

              <p className='mt-5'>Don't have n account? <Link to='/login' className='text-pink-700 '>Sign Up</Link></p>

            </div>
           
           {/* image */}
            <div className='relative '>
              <img src={loginImg} alt="" className='h-full w-full rounded-2xl object-cover' />
              <div className="absolute top-5 right-5 text-white max-w-xs text-right">
            <p className="text-lg font-semibold">
              Browse thousands of properties to buy, sell, or rent with trusted agents.
            </p>
          </div>
            </div>
        </div>

    </div>
  )
}

export default SignUp