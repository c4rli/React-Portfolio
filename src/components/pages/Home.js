import React from "react";
import { Link } from 'react-router-dom';


// Renders homepage
function Home() {
  return (
    <div id="" className="container-fluid pageWrapper">
      <div id="backgroundImageHome" className="backgroundImage d-flex flex-column">

        <div id="" className=" titleWrapper row justify-content-center text-center w-100 pt-4">
          <h1>carl[í]++</h1>
        </div>

        <div className="row justify-content-end align-items-center w-100 flex-grow-1">
          <div className="col col-12 col-md-6 px-5">
            <h2>hello, world.</h2>
            <p>
              Welcome!
              Here, you'll find a showcase of my front-end development and programming projects.
              As a passionate developer, I'm excited to share my work and skills with you.
              If you're curious about my projects, I invite you to explore my portfolio and get a glimpse into the kind of things I make.
            </p>

            <div className="d-flex justify-content-evenly">
              <Link to="about" className="w-25 disabled btn btn-light homeBtn">
                carli
              </Link>
              <Link to="projects" className="w-25 btn btn-light homeBtn">
                projects
              </Link>
              <Link to="contact" className="w-25 btn btn-light homeBtn">
                contact
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
