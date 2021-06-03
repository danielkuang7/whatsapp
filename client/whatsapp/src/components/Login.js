import React, { useRef } from 'react'
import { Container, Form } from 'react-bootstrap'

export default function Login() {
    const idRef = useRef()

    return (
        <Container className="align-items-center d-flex" style={{ height: '100vh'}}>
            <Form className="w-100">
                <Form.Group>
                    <Form.label>Enter Your ID</Form.label>
                    <Form.Control type="text" ref={idRef} required />                       
                </Form.Group>
                <Button type="submit" className="mr-2">Login</Button>
                <Button variant="secondary">Create A New Id</Button>
            </Form>
        </Container>
    )
}
