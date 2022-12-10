import React from 'react';
import Fade from 'react-reveal/Fade';
import { FiGithub } from 'react-icons/fi';
import { GoLinkExternal } from 'react-icons/go';

const Projects = () => {

    const projectInfo = [
        {
            id: 1,
            name: "SECOND LOOK",
            img: "https://i.ibb.co/tsDwS1r/Screenshot-1.png",
            liveLink: "https://second-look-1e813.web.app",
            githubLink: "https://github.com/ajkn1904/second-look"
        },
        {
            id: 2,
            name: "HOME SERVICE",
            img: "https://i.ibb.co/hZLr0KL/Screenshot-2.png",
            liveLink: "https://home-service-d7776.web.app",
            githubLink: "https://github.com/ajkn1904/home-service"
        },
        {
            id: 3,
            name: "LET'S LEARN",
            img: "https://i.ibb.co/F8568qZ/Screenshot-3.png",
            liveLink: "https://let-s-learn-a3e8c.web.app",
            githubLink: "https://github.com/ajkn1904/lets-learn-client"
        },
        {
            id: 4,
            name: "QUIZ MASTER",
            img: "https://i.ibb.co/FzdCTG9/Screenshot-4.png",
            liveLink: "https://quiz-master-520aa2.netlify.app",
            githubLink: "https://github.com/ajkn1904/quiz-master"
        },
        {
            id: 5,
            name: "ACTIVITY REMINDER",
            img: "https://i.ibb.co/7G24kvw/Screenshot-5.png",
            liveLink: "https://activity-reminder-68d1c6.netlify.app",
            githubLink: "https://github.com/ajkn1904/activity-reminder"
        },
        {
            id: 6,
            name: "TYPE MONSTER",
            img: "https://i.ibb.co/gw71LRn/Screenshot-6.png",
            liveLink: "https://type-monster-debug-505c43.netlify.app",
            githubLink: "https://github.com/ajkn1904/type-monster"
        },

    ]


    return (
        <section className='grid grid-col-1 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto w-[75vw]'>
            {
                projectInfo.map(data =>


                    <Fade bottom>
                        <div key={data.id} className="card bg-base-100 shadow-xl image-full w-[80%] mx-auto">
                            <figure><img src={data.img} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{data.name}</h2>
                                <p></p>
                                <div className="card-actions justify-end gap-6">


                                    <a href={data.githubLink}>
                                        <FiGithub  className='h-8 w-8 text-[#e69ceb] hover:text-[#68eac9]'/>
                                    </a>


                                    <a href={data.liveLink}><GoLinkExternal className='h-8 w-8 text-[#e69ceb] hover:text-[#68eac9]' />
                                    </a>


                                </div>
                            </div>
                        </div>
                    </Fade>
                )
            }
        </section>
    );
};

export default Projects;