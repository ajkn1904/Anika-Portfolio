import React, { useRef } from 'react'
import { Typewriter } from 'react-simple-typewriter'
//import "react-simple-typewriter/dist/index.css"
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';
import Fade from 'react-reveal/Fade';
import { LightSpeed } from 'react-reveal';
import Slide from 'react-reveal/Slide';
import Projects from './components/Projects/Projects';


function App() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2p42k4w', 'template_67qbxwv', form.current, 'lSpaElzdqGnerKafb')
      .then((result) => {
        console.log(result.text);
        toast.success("Message Submitted Successfully")
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <>

      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href='#home' className="hover:bg-[#3b143e] hover:text-[#e69ceb]">Home</a></li>
              <li><a href='#about' className="hover:bg-[#3b143e] hover:text-[#e69ceb]">About</a></li>
              <li><a href='#skills' className="hover:bg-[#3b143e] hover:text-[#e69ceb]">Skills</a></li>
              <li><a href='#projects' className="hover:bg-[#3b143e] hover:text-[#e69ceb]">Projects</a></li>
              <li><a href='#contact' className="hover:bg-[#3b143e] hover:text-[#e69ceb]">Contact</a></li>
            </ul>
          </div>
          <a href='#home' className="btn btn-ghost normal-case text-xl hover:bg-[#3b143e] hover:text-[#e69ceb] font-bold font-serif">ANIKA JUMANA</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a href='#home' className="hover:bg-[#3b143e] hover:text-[#e69ceb]">Home</a></li>
            <li><a href='#about' className="hover:bg-[#3b143e] hover:text-[#f38afb]">About</a></li>
            <li><a href='#skills' className="hover:bg-[#3b143e] hover:text-[#e69ceb]">Skills</a></li>
            <li><a href='#projects' className="hover:bg-[#3b143e] hover:text-[#e69ceb]">Projects</a></li>
            <li><a href='#contact' className="hover:bg-[#3b143e] hover:text-[#e69ceb]">Contact</a></li>
          </ul>
        </div>
        <div className="navbar-end">


          <a href="Anika's Resume.pdf"
            download="Anika's Resume.pdf">
            <button className="btn glass text-[#3b143e] hover:text-[#e69ceb] hover:bg-[#3b143e]">Resume</button>
          </a>


        </div>
      </div>







      <section id="home" className=' text-center mb-5' style={{ backgroundImage: `url('https://i.ibb.co/DGdmz8k/MERN-STACK-DEVELOPMENT.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
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

      </section>







      <section id="about" className='my-20 px-16 lg:w-[70%] mx-auto'>
        <Fade left cascade>

          <h1 className='text-center font-bold text-4xl my-10'>ABOUT ME</h1>
          <p>
            Hello! This is Anika who likes to create thing that live on the internet. My passion in web development started back in the first of 2022 when I was doing my database management project in purpose my academic education. That project taught me a lot about HTML & CSS!
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
            I'm open to Job opportunities where I can contribute, learn and grow my skills more. If you have an opportunity that matches my skills and qualifications then feel free to Connect contact me anytime at my <a href='https://www.linkedin.com/in/anika-jumana-khanam' target="_blank" rel="noreferrer" className='text-blue-500'>LinkedIn</a> where I post useful content that relates to Web Development and Programming.
          </p>

        </Fade>
      </section>



      <Slide bottom cascade>
        <div className='h-1 w-[90%] mx-auto bg-gradient-to-r from-[#264d43] to-[#e69ceb] '></div>
      </Slide>




      <section id="skills">

      </section>







      <section id="projects" className='pt-20 pb-32' data-theme="fantasy">

        <h1 className='text-center font-bold text-4xl my-10'>MY PROJECTS</h1>
        <Projects></Projects>

      </section>




      <Slide left cascade>
        <div className='h-1 w-[90%] mx-auto mb-28 bg-gradient-to-r from-[#264d43] to-[#e69ceb] '></div>
      </Slide>





      <Slide right>
        <section id="contact" data-theme="cupcake">
          <div className="hero min-h-screen py-10">
            <div className="w-[85%] md:w-[70%] lg:w-[60%] flex-col">


              <h1 className="text-center text-4xl font-bold mb-10">Contact Me</h1>


              <div className="flex-shrink-0 w-full p-5 shadow-2xl bg-[#3b143ed7]">
                <form className="card-body" ref={form} onSubmit={sendEmail}>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  text-[#e69ceb]">Name</span>
                    </label>
                    <input type="text" name="userName" placeholder="name" className="input input-bordered" />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  text-[#e69ceb]">Email</span>
                    </label>
                    <input type="email" name="userEmail" placeholder="email" className="input input-bordered" />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  text-[#e69ceb]">Message</span>
                    </label>
                    <textarea name="message" placeholder="message" className="input input-bordered h-32" />

                  </div>
                  <div className="form-control mt-6">
                    <input type="submit" value="Send Message" className="btn glass bg-[#264d43] hover:text-[#e69ceb] my-4" />
                  </div>
                </form>
              </div>
            </div>
          </div>

        </section>
      </Slide>

      <Toaster />

    </>
  );
}

export default App;
