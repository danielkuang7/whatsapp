import React from 'react'
import { Container, Form } from 'react-bootstrap'

export default function Login() {
    return (
        <Container>
            <Form>
                <Form.Group>
                    <Form.label>Enter Your ID</Form.label>
                    <Form.Control type="text"></Form.Control>
                </Form.Group>
            </Form>
        </Container>
    )
}
