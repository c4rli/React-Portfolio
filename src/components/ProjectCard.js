import React from "react";

import { useState } from 'react';
import { Link } from 'react-router-dom';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import READMEGenerator from './assets/images/projects/READMEGenerator.png';
import FavouriteMusicDashboard from './assets/images/projects/FavouriteMusicDashboard.png';
import WeatherDashboard from './assets/images/projects/5DayWeather.png';
import PasswordGenerator from './assets/images/projects/PasswordGenerator.png';
import JavascriptQuiz from './assets/images/projects/JavascriptQuiz.png'
import Tarot from './assets/images/projects/Tarot.png'




function ProjectCard({ id, title, description, technologies, imagePath, githubLink, deployedLink }) {

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const buttonsVisibility = {
    opacity: isHover ? '0.9' : '0',
    transition: 'opacity 1s',
  }

  const projectImages = [WeatherDashboard, FavouriteMusicDashboard, READMEGenerator, PasswordGenerator, JavascriptQuiz, Tarot]
  const projectLanguages = {
    nodejs: "devicon-nodejs-plain colored",
    javascript: `devicon-javascript-plain colored`,
    bootstrap: "devicon-bootstrap-plain colored",
    python: "devicon-python-plain colored",
    firefox: "devicon-firefox-plain",
    github: "devicon-github-plain"
  }

  const languageIcons = technologies.map(
    (lang, index) => <i className={projectLanguages[lang]} key={index}></i>
  )

  let buttons;
  let deployedButton;
  let githubButton;

  if(!deployedLink && !githubLink){

  } else {
    if (deployedLink){
      deployedButton = <a href={deployedLink} target="_blank" className="w-100">
            <Button variant="primary" size="lg" className="homeBtn">
              <i className={projectLanguages["firefox"]}></i> Deployed App
            </Button>
          </a>
    }
    if (githubLink){
      githubButton = <a href={githubLink} target="_blank" className="w-100">
            <Button variant="secondary" size="lg" className="homeBtn">
              <i className={projectLanguages["github"]}></i> Github Repo
            </Button>
          </a>
    }

    buttons =
    <div className="projectButtonsWrapper" style={buttonsVisibility} onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className="projectButtons d-flex align-items-center justify-content-center">
        <div className="d-grid gap-2">
          {deployedButton}
          {githubButton}
        </div>
      </div>
    </div>;
  }

  

  return (
    <Col>
      <Card className="h-100" bg="dark" text="white" border="light">
        <div className="projImgWrapper">
          <Card.Img variant="top" src={projectImages[id]} />
          {buttons}
          <span className="langIcons">{languageIcons}</span>
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
            {/* <i className={projectLanguages[technologies]}></i> */}

          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProjectCard;