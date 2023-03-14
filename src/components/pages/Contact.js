import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import Row from 'react-bootstrap/Row';


function Contact() {

  return (
    <div id="contactWrapper" className="pageWrapper">
      <div id="backgroundImageContact" className="backgroundImage d-flex flex-column">
        <div className="justify-content-center text-center w-100 py-4"><h2>Contact</h2></div>

        <div id='contactCardWrapper' className="d-flex align-items-center justify-content-center">
          <Container fluid id="contactCards" className="p-0 d-flex flex-column align-items-center justify-content-center">
            <Card className="contactCard" bg="dark" text="white" border="light">
              <Card.Body>
                <Card.Title>KEEP EXPLORING</Card.Title>

                <ul>
                  <li>GITHUB</li>
                  <li>LINKEDIN</li>
                  <li>MY CV</li>
                </ul>

              </Card.Body>
            </Card>
            <Card className="contactCard" bg="light" text="black" border="dark">
              <Card.Body>
                <Card.Title>GET IN TOUCH</Card.Title>

                <ul>
                  <li>Email: carlos@viscoplastique.xyz</li>
                  <li>Website: www.viscoplastique.xyz</li>
                </ul>
                <Accordion flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Lets collaborate!</Accordion.Header>
                    <Accordion.Body>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" />
                          <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                          </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Example textarea</Form.Label>
                          <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="primary" type="">
                          Submit
                        </Button>
                      </Form>
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
