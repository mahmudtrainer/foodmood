import React from 'react';
import logo from '../../../public/logo.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-around p-3'>
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
            <div className='my-auto'><button className='btn bg-red-500 text-white'>Log In</button></div>
        </div>
    );
};

export default Navbar;