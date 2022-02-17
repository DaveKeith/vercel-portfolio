import Link from "next/link";
import Image from "next/image";
import classes from "./project-item.module.scss";

const ProjectListItem = ({ project }) => {
    let { projectId, projectName, description } = project;
    const img = project.project[0];
    
    if(project.workplace){
        projectName = `${project.workplace} - ${projectName}`;
    }


    return (
        <li>
            <Link 
                href={"/projects/[projectId]"} 
                as={`/projects/${projectId}`} 
                passHref
            >
                <div>
                    <h4>{projectName}</h4>
                    <p>{description}</p>
                    <Image src={img.img} alt={img.name} width={500} height={300} />
                </div>
            </Link>
        </li>
    )
}

export default ProjectListItem;