import React from 'react';
import Banner from './Banner';
import About from './About';
import Service from './Service';
import Card from './Card';
import Craving from './Craving';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Service></Service>
           <Card></Card>
           <Craving></Craving>
        </div>
    );
};

export default Home;