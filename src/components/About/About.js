import React from 'react';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <section className='p-16 font-serif' data-theme="cupcake">
            <Fade left cascade>
                <div id="about" className='lg:w-[70%] mx-auto text-black'>
                    <h1 className='text-center font-bold text-4xl my-10'>ABOUT ME</h1>
                    <p>
                        Hello! This is Anika who likes to create thing that live on the internet. My passion in web development started back in the first of 2022 when I was doing my 'Database Management project' in purpose of my academic education. That project taught me a lot about HTML & CSS! Though it was done using  PHP & MySQL, but now I'm very interested in doing projects using MERN. 
                    </p>

                    <div className='my-10'>
                        Here are the few technologies I’ve been working now-a-days:

                        <div className='mx-16 my-3 grid grid-cols-1 md:grid-cols-2 lg::grid-cols-2 gap-3 font-bold text-[#3b143ed7]'>
                            <li>JavaScript</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MongoDB</li>
                        </div>

                        <p>
                            Check out some of my works in the Projects section.
                        </p>
                    </div>

                    <p>
                        I'm open to Job opportunities where I can contribute, learn and grow my skills more. If you have an opportunity that matches my skills and qualifications then feel free to Connect contact me anytime at my <span><a href='https://www.linkedin.com/in/anika-jumana-khanam' target="_blank" rel="noreferrer" className='text-blue-500'>LinkedIn</a></span> where I post useful content that relates to Web Development and Programming.
                    </p>
                </div>
            </Fade>
        </section>
    );
};

export default About;