import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { contacts } from '../contexts/ContactsProvider'

export default function NewConversationModal() {
    return (
        <>
        <Modal.Header closeButton>Create Conversation</Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
            {contacts.map(contact => {
                <Form.Group controlId={contact.id} key={contact.id}>
                    <Form.Check
                        type="checkbox"
                    />
                </Form.Group>
            })}
            <Button type="submit">Create</Button>
        </Form>
        </Modal.Body>
        </>
    )
}
