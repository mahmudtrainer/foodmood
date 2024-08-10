import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../firebase.config';
import { ContextSource } from '../../ContextAPI/ContextAPI';
import { FcGoogle } from "react-icons/fc";
// import { app } from '../firebase.config';


const LogIn = () => {
    const auth = getAuth(app)
    const navigate = useNavigate()
    const {logIn, googleUser} = useContext(ContextSource)
    
    const handleLogin = (e) => {
        e.preventDefault()
        const data = e.target
        const email = data.email.value
        const password = data.password.value
        console.log(email, password);

        if (email && password) {
            logIn(email,password)
            .then(res=>{
                console.log(res);
                navigate("/")
                
            })
            .catch(err=>{
                console.log(err);
                
            })
        }



        // if (email && password) {
        //     signInWithEmailAndPassword(auth, email, password)
        //         .then(res => {
        //             console.log(res);

        //         })
        //         .catch(err => {
        //             console.log(err);

        //         })
        // }



    }





//     const handleLogOut = ()=>{
// if(user){
//     signOut(auth)
//     .then(res=>{
//         console.log('Log Out Successfully');
        
//     })
//     .catch(err=>{
//         console.log(err);
        
//     })
// }
//     }

    return (
        <section>
            <h1 className='text-5xl text-center font-bold text-red-500'>This is a LogIn Page</h1>
            <div className='w-fit my-10 space-y-5 border-2 p-3 mx-auto'>
                <form onSubmit={handleLogin} className=''>
                    <div>
                        <label className='text-lg font-semibold' htmlFor="">Enter Your Email:</label> <br />
                        <input name='email' type="text" className='border-2 p-1 w-72 border-black rounded-lg' />
                    </div>
                    <div>
                        <label className='text-lg font-semibold' htmlFor="">Enter Your Password:</label> <br />
                        <input name='password' type="password" className='border-2 p-1 w-72 border-black rounded-lg' />
                    </div>
                    <div className='flex justify-end'>
                        <button onClick={() => navigate("/registration")} className='text-red-500 font-bold'>New User???</button>
                    </div>
                    <div className='text-center'>
                        <button className='btn bg-red-500 mx-auto text-white w-1/2'>LogIn</button>
                    </div>
                </form>
                <div>
                    <button onClick={()=>googleUser()} className='w-full rounded-xl btn text-xl font-semibold bg-transparent '>Log In With Google <FcGoogle></FcGoogle> </button>
                </div>

                {/* <div className='mx-auto w-fit'>
                    {
                        user? 
                        <button onClick={handleLogOut} className='btn text-white w-32 bg-red-500 '>LogOut</button>
                        :
                        ""
                    }
                </div> */}
            </div>
        </section>
    );
};

export default LogIn;