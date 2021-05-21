import React, { useRef } from 'react'
import { Container, Form } from 'react-bootstrap'

export default function Login() {
    const idRef = useRef()

    return (
        <Container>
            <Form>
                <Form.Group>
                    <Form.label>Enter Your ID</Form.label>
                    <Form.Control type="text" ref={idRef}></Form.Control>
                </Form.Group>
            </Form>
        </Container>
    )
}
