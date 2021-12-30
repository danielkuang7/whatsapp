import React, { useState} from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { contacts } from '../contexts/ContactsProvider'

export default function NewConversationModal() {
    const [selectedContactIds, setSelectedContactIds] = useState([])
    return (
        <>
        <Modal.Header closeButton>Create Conversation</Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
            {contacts.map(contact => {
                <Form.Group controlId={contact.id} key={contact.id}>
                    <Form.Check
                        type="checkbox"
                        value={selectedContactIds.includes(contact.id)}
                    />
                </Form.Group>
            })}
            <Button type="submit">Create</Button>
        </Form>
        </Modal.Body>
        </>
    )
}
