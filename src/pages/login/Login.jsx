import React, { useState } from 'react'
import { FaApple,  } from 'react-icons/fa'
import loginImg from '../../assets/img/login.png'
import logo from '../../assets/img/logo.png'
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Login = () => {
   const [email, setEmail] = useState('rownok@gmail.com')
  const [password, setPassword] = useState('password123') 
  const [showPassword, setShowPassword] = useState(false)
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

              <form className='space-y-4' action="">
                <div className='bg-gray-100 text-left px-2'>
                  <label className='block text-sm text-gray-600 ' htmlFor="">Email</label>
                  <input type="email" 
                   id="email"
                  value={email}
                onChange={(e) => setEmail(e.target.value)}
                  placeholder='example2@gmail.com'
                   className='w-full  rounded-lg bg-gray-10' />
                </div>

                <div className='bg-gray-100 px-2  text-left'>
                  <label className=' text-gray-600 ' htmlFor="">Password</label>
                  <div className='relative'>
                      <input 
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}

                       placeholder='*******'
                        className='w-full   rounded-lg bg-gray-00' />

                  <button
                  type='button'
                  onClick={() => setShowPassword(prev => !prev)}
                  className='absolute right-3 -top-2 text-gray-600'
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                </button>
                  </div>
                 </div>

                 <div className='flex items-center justify-between text-sm'>
                   <label className='flex items-center space-x-2' htmlFor="">
                    <input type="checkbox" className='accent-pink-700' />
                    <span>Remember me</span>
                   </label>
                   
                   <a href="#" className='text-pink-900 underline'>Forgot Password?</a>
                      
                     
                 </div>
                  <button className='w-full bg-pink-900 text-gray-100 py-2 rounded-lg hover:bg-pink-800 transition cursor-pointer'>Login</button>
                  
              </form>

              <p className='mt-5'>Don't have n account? <Link to='/signup'  className='text-pink-700 '>Sign Up</Link></p>

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

export default Login