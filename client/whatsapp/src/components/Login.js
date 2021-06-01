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
                <Button type="submit">Login</Button>
                <Button>Login</Button>
            </Form>
        </Container>
    )
}
