import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectsDetails = () => {
    
    const {id} = useParams()
    //console.log(id)
    
    const [projectDetails, setProjectDetails] = useState([]);
    
    
    useEffect(() => {
        fetch('../../../projectData.json')
        .then(res => res.json())
        .then(data => setProjectDetails(data))
    }, [])
    
    
    
    const specificProjectInfo = projectDetails.find(proDetails => proDetails.id.toString().includes(id))
    
    console.log(specificProjectInfo)
    
   

    return (
        <div>
            <h1>Hello Details..........</h1>
            <p>{specificProjectInfo && specificProjectInfo.name}</p>
        </div>
    );
};

export default ProjectsDetails;