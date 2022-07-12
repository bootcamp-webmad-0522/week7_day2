import { projects as projectsList } from './../../fakeAPI'

const ProjectsList = () => {

    return (

        <div className="list">

            <h2>Project List</h2>

            {
                projectsList.map(project => {
                    return (
                        <div key={project._id}>
                            <h3>{project.name}</h3>
                            <p>Tech Stack: {project.techStack}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProjectsList