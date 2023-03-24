import { Form, Button } from 'react-bootstrap';

// Generate contact form for Contact page
function ContactForm() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Say hello!</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="dark" type="" className='homeBtn' >
                Submit
            </Button>
        </Form>
    )
}

export default ContactForm