import React, { useRef } from 'react'
import { Container, Form } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'

export default function Login( {onIdSubmit} ) {
    const idRef = useRef()

    function handleSubmit(e){
        e.preventDefault()

        onIdSubmit(idRef.current.value)
    }

    return (
        <Container className="align-items-center d-flex" style={{ height: '100vh'}}>
            <Form onSubmit={handleSubmit} className="w-100">
                <Form.Group>
                    <Form.label>Enter Your ID</Form.label>
                    <Form.Control type="text" ref={idRef} required />                       
                </Form.Group>
                <Button type="submit" className="mr-2">Login</Button>
                <Button onClick={createNewId} variant="secondary">Create A New Id</Button>
            </Form>
        </Container>
    )
}
