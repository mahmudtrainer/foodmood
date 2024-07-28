    import React from 'react';
    import banner from "../../../public/banner.png"
    const Banner = () => {
        return (
            <div className='relative'>
                <div className=''>
                    <img src={banner} className='w-full h-[600px] object-cover ' alt="" />
                </div>
                <div className='w-1/2 absolute top-1/3 left-10 text-white'>
                    <h1 className='text-4xl font-bold'>Welcome To our website </h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis error impedit fugiat eius, quisquam dignissimos cum repellendus ut reiciendis a voluptatum velit molestiae maxime in excepturi vero tempore dolor eveniet!</p>
                    <div>
                        <button>Food Order Now</button>
                        <button> Details </button>
                    </div>
                </div>
            </div>
        );
    };
    
    export default Banner;