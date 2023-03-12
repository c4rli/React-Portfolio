import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ProjectCard from '../ProjectCard';
// import Card from 'react-bootstrap/Card';


function Projects() {
  return (
      <div className="pageWrapper d-flex align-items-center justify-content-center">
    {/* <Container fluid className="pageWrapper"> */}
      {/* <h1>Projects</h1> */}
        {/* <Card className="p-4 m-5"> */}
        <Container fluid id="projectCards" className="h-100">
          <Row xs={1} sm={2} md={3} className="g-4 m-5">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </Row>
        </Container>
        {/* </Card> */}
    {/* </Container> */}
      </div>
  );
}

export default Projects;
