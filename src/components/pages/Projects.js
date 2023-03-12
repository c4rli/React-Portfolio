// import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ProjectCard from '../ProjectCard';
// import Card from 'react-bootstrap/Card';
import projectData from '../data/projectData.json'


function Projects() {

  const projectsArray = projectData.map(
    project => <ProjectCard {...project } key ={project.id}/>
)

  return (
      <div id="projectsWrapper" className="pageWrapper d-flex align-items-center justify-content-center">
    {/* <Container fluid className="pageWrapper"> */}
      {/* <h1>Projects</h1> */}
        {/* <Card className="p-4 m-5"> */}
        <Container fluid id="projectCards" className="p-0 w-75">
          <Row xs={1} sm={2} md={3} className="g-4 my-4">
            {/* <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard /> */}
            {projectsArray}
          </Row>
        </Container>
        {/* </Card> */}
    {/* </Container> */}
      </div>
  );
}

export default Projects;
