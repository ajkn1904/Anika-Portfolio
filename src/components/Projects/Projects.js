import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { FiGithub } from 'react-icons/fi';
import { GoLinkExternal } from 'react-icons/go';
import { Link } from 'react-router-dom';


const Projects = () => {

    const [projectInfo, setProjectInfo] = useState([]);

    useEffect(() => {
        fetch('projectData.json')
            .then(res => res.json())
            .then(data => setProjectInfo(data))
    }, [])



    return (
        <section id="projects" className='pt-20 pb-32 bg-gradient-to-r from-[#7bb1a34d] to-[#ffff] font-serif' data-theme="fantasy">

            <h1 className='text-center font-bold text-4xl my-10'>PROJECT SHOWCASE</h1>
            <h3 className='text-2xl font-semibold text-[#1d5f4d] mb-5 ml-[15%]'>Let's see a few from My Works now!</h3>


            <div className='grid grid-col-1 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto w-[75vw]'>
                {
                    projectInfo && projectInfo.map(data =>


                        <Fade bottom key={data.id}>
                            <div className="card bg-base-100 shadow-xl image-full w-[80%] mx-auto">
                                <figure><img src={data.img} alt="" /></figure>
                                <div className="card-body">
                                    <div className='text-white rounded p-3 bg-[#0a353885]'>
                                        <h2 className="card-title my-2 text-xl">{data.name}</h2>
                                        <p className='my-2'>{data.intro}</p>
                                    </div>


                                    <Fade bottom>
                                        <div className="card-actions flex justify-between gap-3 bg-black rounded-full p-3">
                                            <Link to={`/projectDetails/${data.id}`} className='hover:text-[#e69ceb] text-[#68eac9] tex'>View More</Link>

                                            <div className='flex flex-row gap-3'>
                                                <a href={data.githubLink}>
                                                    <FiGithub className='h-6 w-6 hover:text-[#e69ceb] text-[#68eac9]' />
                                                </a>


                                                <a href={data.liveLink}><GoLinkExternal className='h-6 w-6 hover:text-[#e69ceb] text-[#68eac9]' />
                                                </a>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>

                            </div>
                        </Fade>
                    )
                }
            </div>
        </section>
    );
};

export default Projects;