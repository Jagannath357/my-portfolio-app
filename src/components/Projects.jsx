import ProjectCard from "./ProjectCard";
import Project1 from "../assets/images/project1.png";
import Project2 from "../assets/images/project2.png";
import Project3 from "../assets/images/project3.png";
function Projects() {
    const cardArr = [
        {name:"E-commerce Plartform",
            image:Project1,
            description:"Full—stack web application bujtt With React. Node.js,and MongoDB",
            skills:["React","Node.js","MongoDB","Express"]},
        {name:"Task Management App",
            image:Project2,
            description:"Responstve mobile—first application with real—umeupdates",
            skills:["React Native","Firebase","Redux"]},
        {name:"Data Visualization Dashboard",
            image:Project3,
            description:"Interactive dashboard for business analytics andreporting",
            skills:["Dj.js","Python","Flask","PostgreSQL"]}
    ]
    return ( 
        <div className="container mt-5 pb-5">
            <div className="d-flex flex-column align-items-center">
                <h1>Featured Projects</h1>
                <div className="row mt-5 d-md-flex flex-sm-row flex-md-wrap" id="projectContainer">
                    {
                        cardArr.map((element,idx)=>{
                            console.log(idx);
                            return <ProjectCard key={idx} name={element.name} look={element.image} desc={element.description} skills={element.skills} />
                        })
                    }
                </div>
            </div>
        </div>
     );
}

export default Projects;