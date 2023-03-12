import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function ProjectCard({id, title, description, technologies, imagePath}) {
    return (
        <Col>
            <Card>
              <Card.Img variant="top" src={imagePath} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  {description}<br/>
                  Technologies: {technologies}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
    );
  }
  
  export default ProjectCard;