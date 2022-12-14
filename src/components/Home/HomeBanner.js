import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { LightSpeed } from 'react-reveal';
import Slide from 'react-reveal/Slide';

const HomeBanner = () => {
    return (
        <div id="home" className=' text-center font-serif' style={{ backgroundImage: `url('https://i.ibb.co/DGdmz8k/MERN-STACK-DEVELOPMENT.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='h-[70vh] px-10' style={{ background: "#ffffff", opacity: 0.95 }}>
                <h1 className='text-2xl font-bold pt-[15vh] mb-8'>
                    <Slide top>
                        <p> Hey, I'm</p>
                    
                    
                    
                    <p className='text-4xl font-bold hover:text-[#3b143e] text-[#2c6d5d]'>ANIKA JUMANA KHANAM NISHAT</p>
                    </Slide>
                    </h1>

                <LightSpeed bottom cascade>
                    <>A <Typewriter
                            loop
                            cursor
                            cursorStyle='.'
                            typeSpeed={50}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            words={['MERN Stack Web Developer', "Front End Developer", "JavaScript Developer", "React Developer"]}
                        /> <p>I'm passionate in building websites with smooth UX that leads to the goal successfully!</p></>
                </LightSpeed>

                <a href='#projects' className="btn glass hover:bg-[#264d43] hover:text-[#e69ceb] bg-[#3b143e] my-4">Check out my Projects</a>
            </div>

        </div>
    );
};

export default HomeBanner;