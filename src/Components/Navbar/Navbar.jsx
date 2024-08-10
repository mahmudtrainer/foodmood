import React, { useContext } from 'react';
import logo from '../../../public/logo.png'
import { NavLink, useNavigate } from 'react-router-dom';
import { ContextSource } from '../ContextAPI/ContextAPI';

const Navbar = () => {
    const {user, logOut} = useContext(ContextSource)
    console.log(user);

    const navigate = useNavigate()
    
    return (
        <div className='flex flex-wrap gap-3 justify-around p-3'>
            <div>
                <img src={logo} className='w-20 h-16 object-cover' alt="" />
            </div>
            <div className='my-auto'>
                <ul className='flex gap-5  '>
                    <NavLink to={'/'}  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-500 underline " : ""
  }>
                        <li className='text-lg font-semibold'>Home</li>
                    </NavLink>
                    <NavLink to={'/menu'} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-500 underline " : ""
  }>
                        <li className='text-lg font-semibold'>Menu</li>
                    </NavLink>
                    <NavLink to={'/service'} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-500 underline " : ""
  }>
                        <li className='text-lg font-semibold'>Service</li>
                    </NavLink>
                    <NavLink to={'/contact'} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-500 underline " : ""
  }>
                        <li className='text-lg font-semibold'>Contact Us</li>
                    </NavLink>
                </ul>
            </div>
            <div className='my-auto w-fit lg:mx-0 md:mx-0 ml-auto '>
                {
                    user?
                    <div className='flex gap-5'>
                        <img src={user?.photoURL} className='w-12 h-12 rounded-full object-cover' alt="" />
                        <div>
                        <p>{user?.displayName}</p>
                        <p>{user?.email}</p>
                        </div>
                        <button onClick={()=>logOut()} className='btn bg-red-500 text-white'>LogOut</button>
                    </div>
                    :
                    <button onClick={()=> navigate("/login")} className='btn bg-red-500 text-white'>Log In</button>
                }
            </div>
        </div>
    );
};

export default Navbar;