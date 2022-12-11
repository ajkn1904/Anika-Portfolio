import React from 'react';
import Slide from 'react-reveal/Slide';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import ContactMe from '../ContactMe/ContactMe';
import HomeBanner from './HomeBanner';

const Home = () => {
    return (
        <>

            <HomeBanner/>


            <Slide right cascade>
                <div className='h-1 w-[90%] mx-auto bg-gradient-to-r from-[#264d43] to-[#e69ceb] '></div>
            </Slide>


            <About/>


            <Slide right cascade>
                <div className='h-1 w-[90%] mx-auto bg-gradient-to-r from-[#264d43] to-[#e69ceb]'></div>
            </Slide>


            <Skills/>


            <Slide bottom cascade>
                <div className='h-1 w-[90%] mx-auto bg-gradient-to-r from-[#264d43] to-[#e69ceb]'></div>
            </Slide>


            <Projects/>


            <Slide left cascade>
                <div className='h-1 w-[90%] mx-auto bg-gradient-to-r from-[#264d43] to-[#e69ceb]'></div>
            </Slide>


            <ContactMe/>

        </>
    );
};

export default Home;