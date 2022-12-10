import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { LightSpeed } from 'react-reveal';
import Slide from 'react-reveal/Slide';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import ContactMe from '../ContactMe/ContactMe';

const Home = () => {
    return (
        <>
            <div id="home" className=' text-center font-serif' style={{ backgroundImage: `url('https://i.ibb.co/DGdmz8k/MERN-STACK-DEVELOPMENT.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='h-[70vh] px-10' style={{ background: "#ffffff", opacity: 0.95 }}>
                    <h1 className='text-2xl font-bold pt-[15vh] mb-8'>
                        <Slide top>
                            <p> Hey, I'm</p>
                        </Slide>
                        <br />
                        <span className='text-4xl font-bold hover:text-[#3b143e] text-[#2c6d5d]'>
                            <Typewriter
                                loop
                                cursor
                                cursorStyle='.'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                                words={['ANIKA JUMANA KHANAM NISHAT', ""]}
                            />
                        </span></h1>

                    <LightSpeed bottom cascade>
                        <p>A MERN Stack Web Developer, passionate in building websites with smooth UX that leads to the goal successfully!</p>
                    </LightSpeed>

                    <a href='#projects' className="btn glass hover:bg-[#264d43] hover:text-[#e69ceb] bg-[#3b143e] my-4">Check out my Projects</a>
                </div>

            </div>




            <Slide right cascade>
                <div className='h-1 w-[90%] mx-auto bg-gradient-to-r from-[#264d43] to-[#e69ceb] '></div>
            </Slide>


            <About></About>

            <Slide right cascade>
                <div className='h-1 w-[90%] mx-auto bg-gradient-to-r from-[#264d43] to-[#e69ceb]'></div>
            </Slide>


            <Skills></Skills>


            <Slide bottom cascade>
                <div className='h-1 w-[90%] mx-auto bg-gradient-to-r from-[#264d43] to-[#e69ceb]'></div>
            </Slide>


            <Projects></Projects>



            <Slide left cascade>
                <div className='h-1 w-[90%] mx-auto bg-gradient-to-r from-[#264d43] to-[#e69ceb]'></div>
            </Slide>


            <ContactMe></ContactMe>

        </>
    );
};

export default Home;