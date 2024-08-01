    import React from 'react';
    import banner from "../../../public/banner.png"
    const Banner = () => {
        return (
            <div className='relative'>
                <div className=''>
                    <img src={banner} className='w-full lg:h-[600px] md:h-[600px]  h-80 object-cover ' alt="" />
                </div>
                <div className='w-1/2 absolute lg:top-1/3 md:top-1/3 top-5 left-10 text-white'>
                    <h1 className='lg:text-4xl md:text-3xl text-xl font-bold my-2'>Welcome To our website </h1>
                    <p className='lg:text-base md:text-base text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis error impedit fugiat eius, quisquam dignissimos cum repellendus ut reiciendis a voluptatum velit molestiae maxime in excepturi vero tempore dolor eveniet!</p>
                    <div>
                        <button>Food Order Now</button>
                        <button> Details </button>
                    </div>
                </div>
            </div>
        );
    };
    
    export default Banner;