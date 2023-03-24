import { Container, Card, Accordion } from 'react-bootstrap';
import CVPDF from '../assets/CV/CarliNavarro CV 2023.pdf'
import ContactForm from '../ContactForm'

// Generate contact page
function Contact() {

  return (
    <div id="contactWrapper" className="pageWrapper">
      <div id="backgroundImageContact" className="backgroundImage d-flex flex-column">
        <div className="titleWrapper justify-content-center text-center w-100 py-4"><h2>Contact</h2></div>

        <div id='contactCardWrapper' className="d-flex align-items-center justify-content-center">
          <Container fluid id="contactCards" className="p-0 d-flex flex-column align-items-center justify-content-center">
            <Card className="contactCard" bg="dark" text="white" border="light">
              <Card.Body>
                <Card.Title>KEEP EXPLORING</Card.Title>

                <ul className="list-group list-group-flush">
                  <a href='https://github.com/c4rli'><li className="list-group-item list-group-item-dark">Github ~ c4rli</li></a>
                  <a href='https://linkedin.com/'><li className="list-group-item list-group-item-dark">LinkedIn ~ Carli N.</li></a>
                  <a href={CVPDF} target="_blank" rel="noreferrer"><li className="list-group-item list-group-item-dark">View my CV</li></a>
                </ul>

              </Card.Body>
            </Card>
            <Card className="contactCard" bg="light" text="black" border="dark">
              <Card.Body>
                <Card.Title>GET IN TOUCH</Card.Title>

                <ul className="list-group list-group-flush">
                <a href='mailto:carlos@viscoplastique.xyz'><li className="list-group-item list-group-item-light">Email: carlos@viscoplastique.xyz</li></a>
                </ul>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Lets collaborate!</Accordion.Header>
                    <Accordion.Body>
                      <ContactForm />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

              </Card.Body>
            </Card>
          </Container>
        </div>
        <Container>

        </Container>
      </div>
    </div>
  );
}

export default Contact;
