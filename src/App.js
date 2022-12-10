import './App.css';

function App() {

  return (
    <>

      <div className="navbar bg-base-100">
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
            <li><a href='#contact' >Contact</a></li>
          </ul>
        </div>
        <div className="navbar-end">


          <a href="Anika's Resume.pdf"
            download="Anika's Resume.pdf">
            <button className="btn glass text-[#3b143e] hover:text-[#e69ceb] hover:bg-[#3b143e]">Resume</button>
          </a>


        </div>
      </div>



      <section id="home" className=' text-center my-5' style={{ backgroundImage: `url('https://i.ibb.co/DGdmz8k/MERN-STACK-DEVELOPMENT.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className='h-[70vh] px-10' style={{ background: "#ffffff", opacity: 0.9 }}>
          <h1 className='text-2xl font-bold pt-[20vh]'>Hey, I'm
            <br />
            <span className='text-4xl font-bold text-[#3b143e] hover:text-[#2c6d5d]'>ANIKA JUMANA KHANAM NISHAT</span></h1>
          <p>A MERN Stack Web Developer, passionate in building websites with smooth UX that leads to the goal successfully!</p>

          <a href='#projects' className="btn glass bg-[#264d43] hover:text-[#e69ceb] hover:bg-[#3b143e] my-4">Check out my Projects</a>
        </div>

      </section>


      <section id="about" className='my-20 px-16 lg:w-[70%] mx-auto'>
        <h1 className='text-center font-bold text-4xl my-10'>ABOUT ME</h1>
        <p>
          Hello! This is Anika who likes to create thing that live on the internet. My passion in web development started back in the first of 2022 when I was doing my database management project in purpose my academic education. That project taught me a lot about HTML & CSS!

          <div className='my-10'>
            Here are the few technologies I’ve been working now-a-days:

            <div className='w-76 mx-16 my-3 grid grid-cols-2'>
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

          I'm open to Job opportunities where I can contribute, learn and grow my skills more. If you have an opportunity that matches my skills and qualifications then feel free to Connect contact me anytime at my <a href='https://www.linkedin.com/in/anika-jumana-khanam' target="_blank" rel="noreferrer" className='text-blue-500'>LinkedIn</a> where I post useful content that relates to Web Development and Programming.
        </p>

      </section>



      <section id="skills">

      </section>



      <section id="projects">

      </section>



      <section id="contact">

      </section>

    </>
  );
}

export default App;
