import React from 'react'

export default function NewConversationModal() {
    return (
        <>
        <Modal.Header closeButton>Create Contact</Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Id</Form.Label>
                <Form.Control type="text" ref={idRef} required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" ref={nameRef} required />
            </Form.Group>
            <Button type="submit">Create</Button>
        </Form>
        </Modal.Body>
        </>
    )
}
