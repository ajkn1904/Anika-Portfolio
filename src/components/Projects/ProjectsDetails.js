import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { VscDebugBreakpointData } from 'react-icons/vsc';
import { GoLinkExternal } from 'react-icons/go';
import { FiGithub } from 'react-icons/fi';

const ProjectsDetails = () => {

    const { id } = useParams()
    //console.log(id)

    const [projectDetails, setProjectDetails] = useState([]);


    useEffect(() => {
        fetch('../../../projectData.json')
            .then(res => res.json())
            .then(data => setProjectDetails(data))
    }, [])



    const specificProjectInfo = projectDetails.filter(proDetails => proDetails.id.toString().includes(id))

    console.log(specificProjectInfo)



    return (
        <div data-theme='cupcake'>
            <>
                {specificProjectInfo && specificProjectInfo.map(
                    data => <div key={data.id}>
                        <h1 className='text-center font-bold text-4xl py-10'>Project: <span className='text-[#3b143ed7]'>{data.name}</span>
                        </h1>

                        <div className="bg-[#3b143e] carousel carousel-center w-[85%] mx-auto p-5 space-x-4 rounded-box h-[90vh] border-4 border-[#264d43]">
                            <div className="carousel-item">
                                {data.UiImage.map(uiImg =>
                                    <img src={uiImg} className="w-[900px] mx-20" alt='' />
                                )
                                }
                            </div>

                        </div>
                        <div className="flex justify-center w-full py-2 gap-2">
                            {data.UiImage.map(uiImgLength =>
                                <label className="w-2 h-2 rounded-full bg-[#264d43]"></label>
                            )}
                        </div>


                        <div className="hero min-h-screen bg-[#152c26] text-white mt-10">
                            <div className="hero-content flex-col lg:flex-row-reverse px-10">


                                <div>
                                    <div className='flex justify-between items-center gap-10 mt-12'>
                                        <h1 className="text-3xl font-bold">Project Details</h1>


                                        <div className='flex flex-col mt-10'>
                                            <div className='flex justify-center item-center gap-6'>
                                                <a href={data.githubLink}>
                                                    <FiGithub className='h-8 w-8 hover:text-[#e69ceb] text-[#68eac9]' /> REPO
                                                </a>


                                                <a href={data.liveLink}><GoLinkExternal className='h-8 w-8 hover:text-[#e69ceb] text-[#68eac9]' /> DEMO
                                                </a>
                                            </div>

                                            <Link to='/' className="btn glass h-8 hover:bg-[#e69ceb] bg-[#68eac9] text-black font-bold mt-5">back to home</Link>


                                        </div>
                                    </div>

                                    <div className='py-10'>
                                        {data.details.map(point =>
                                            <p className="py-6 text-lg flex items-center"><VscDebugBreakpointData className='h-4 w-4 text-[#e69ceb]' /> <span className='ml-4'>{point}</span></p>
                                        )
                                        }
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                )}</>
        </div>
    );
};

export default ProjectsDetails;