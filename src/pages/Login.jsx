import React, {useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { userAuth } from '../context/AuthContext'
export const Login = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  const {user,signIn} = userAuth();
  const navigate = useNavigate();

  
  const handleSignIn = async(e)  => {
      e.preventDefault();
      setError('');
       try{
            await signIn(email,password);
            navigate('/');
       }catch(err){
        setError(err.message);
       }
    }

    
  return (
    <div className='w-full h-full'>
        {/*background */}
        <img className='hidden sm:block  w-full h-screen object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/42f6dd08-d478-46e4-a4a8-e3a93aa7e085/IN-en-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="netflix-bgimage" />
        <div className='absolute w-full h-full top-0 left-0 bg-black/50 z-10'></div>
        {/*background */}

        {/* form */}
        <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center z-50'>
        <form 
          onSubmit = {handleSignIn}
          className='flex flex-col text-white box-border w-[70%] bg-black/80 px-5 py-3 sm:px-8 sm:py-16 md:w-[450px] md:px-10 md:py-[10vh]  gap-10'>
            
            <h1 className='text-xl sm:text-2xl md:text-4xl font-extrabold antialiased'>Sign In</h1>
            {error && <p>{error}</p> }
            <input 
            onChange={(e) => setEmail(e.target.value)} 
            className='bg-gray-600 px-2 py-4  w-full focus:outline-none'
            type="email" 
            placeholder='Email' />
            <input 
            onChange={(e) => setPassword(e.target.value)} 
            className='bg-gray-600 px-2 py-4 w-full focus:outline-none'
            value={password} 
            type="password" 
            placeholder='Password' />
            <button type='submit' className='bg-red-600 w-full py-4 mt-5'>Sign In</button> 

            <div className='flex justify-between text-gray-600 -mt-5'>
                <p>
                <input type='checkbox' /> 
                <span className='ml-1'>remember me</span>
                </p>
                <p>Need Help?</p>
            </div>
            <p className='text-white/80'>New to Netflix <Link to='/signup' className='text-blue-500 hover:text-blue-800'>SignUp</Link> </p>
            <p className='font-light text-gray-600 '>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href='#' className='text-blue-500 hover:text-blue-800'>Learn more</a></p>
        </form>
        </div>
        {/* form */}
    </div>
  )
}
