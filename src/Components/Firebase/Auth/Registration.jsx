import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../firebase.config';
import { ContextSource } from '../../ContextAPI/ContextAPI';
// import { app } from '../firebase.config';

const Registration = () => {
    const navigate = useNavigate()

    const {createUser, logOut} = useContext(ContextSource)

const handleRegister = (e)=>{
    e.preventDefault()
    const data = e.target
    const email = data.email.value
    const name = data.name.value
    const photo = data.photo.value
    const password = data.password.value
    console.log(email,password,name,photo);

    if(email,password,name,photo){
        createUser(email,password,name,photo)
        .then(res=>{
            console.log(res);
            logOut()
            navigate('/login')
            
        })
        .catch(err=>{
            console.log(err);
            
        })
    }



    // const auth = getAuth(app);
    // if(email && password){
    //     createUserWithEmailAndPassword(auth, email,password)
    //     .then(res=>{
    //         console.log(res);
    //         if(res){
    //             signOut(auth)
    //         }
            
    //     })
    //     .catch(err=>{
    //         console.log(err);
            
    //     })
    // }


    
}
    return (
        <section>
            <h1 className='text-5xl text-center font-bold text-red-500'>This is a Registration Page</h1>
            <div>
                <form onSubmit={handleRegister} className='w-fit my-10 space-y-5 border-2 p-3 mx-auto'>
                    <div>
                        <label className='text-lg font-semibold' htmlFor="">Enter Your Name:</label> <br />
                        <input name='name' type="text" className='border-2 p-1 w-72 border-black rounded-lg' />
                    </div>
                    <div>
                        <label className='text-lg font-semibold' htmlFor="">Enter Your Email:</label> <br />
                        <input name='email' type="text" className='border-2 p-1 w-72 border-black rounded-lg' />
                    </div>
                    <div>
                        <label className='text-lg font-semibold' htmlFor="">Enter Your Photo:</label> <br />
                        <input name='photo' type="text" className='border-2 p-1 w-72 border-black rounded-lg' />
                    </div>
                    <div>
                        <label className='text-lg font-semibold' htmlFor="">Enter Your Password:</label> <br />
                        <input name='password' type="password" className='border-2 p-1 w-72 border-black rounded-lg' />
                    </div>
                    <div className='flex justify-end'>
                        <button onClick={()=> navigate("/login")} className='text-red-500 font-bold'>Already User???</button>
                    </div>
                    <div className='text-center'>
                        <button className='btn bg-red-500 mx-auto text-white w-1/2'>Registration</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Registration;