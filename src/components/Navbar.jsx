import React from 'react'
import { Link,useNavigate } from 'react-router-dom'; 
import { userAuth } from '../context/AuthContext';
export const Navbar = () => {

  const {user,logOut}  = userAuth();
  const navigate = useNavigate();

  const handleLogout = async() => {
    await logOut();
  }

  const handleAccount = () => {
      navigate('/account');
  }
 
   return (
  
    <div className="absolute  w-screen text-white flex justify-between items-center px-2 sm:px-6 md:px-10 pt-4 z-50">
        <Link to='/'>
        <div className=' text-xl sm:text-2xl md:text-4xl font-bold tracking-wider text-red-600'>Tudum</div>
        </Link>
        
         {
          user?.email ? (
            <div>
              <button onClick={handleAccount} className="text-[10px] text-center font-bold  px-1 md:px-4 sm:px-2 py-1 rounded-sm border border-gray-100 mr-5">Account</button>
              <button onClick={handleLogout} className="text-[10px] font-bold bg-[#dc1414] px-1 md:px-4 sm:px-2 py-1 rounded-sm ">Logout</button> 
           </div>
        )
        : 
        (
          <div className='elements'>
          <Link to='/login'>
          <button className="text-[10px] text-center font-bold  px-1 md:px-4 sm:px-2 py-1 rounded-sm border border-gray-100 mr-5">Sign In</button>
          </Link>
            
          <Link to='/signup'>
          <button className="text-[10px] font-bold bg-[#dc1414] px-1 md:px-4 sm:px-2 py-1 rounded-sm ">Sign Up</button>
          </Link>
          </div>
        )
        }
        </div>
   
  )
}
 