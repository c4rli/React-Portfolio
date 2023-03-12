import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function ProjectCard() {
    return (
        <Col>
            <Card>
              <Card.Img variant="top" src="https://placehold.co/100x100?text=Hello+World" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  A short description of what this app does, very brief and simple. <br/>
                  Technologies: symbol symbol symbol
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
    );
  }
  
  export default ProjectCard;