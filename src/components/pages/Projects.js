import { Container, Row } from 'react-bootstrap';
import ProjectCard from '../ProjectCard';
import projectData from '../data/projectData.json'

// Renders project page
function Projects() {

  // Create array of project cards from projectData.json
  const projectsArray = projectData.map(
    project => <ProjectCard {...project} key={project.id} />
  )

  return (
    <div id="projectsWrapper" className="pageWrapper ">
      <div id="backgroundImageProjects" className="backgroundImage d-flex flex-column">
        <div className="titleWrapper justify-content-center text-center w-100 py-4"><h2>Projects</h2></div>
        <Container fluid id="projectCards" className="p-0 d-flex align-items-center justify-content-center">
          <Row xs={1} md={3} className="g-4 mb-4">
            {projectsArray}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Projects;
