import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { contacts } from '../contexts/ContactsProvider'

export default function NewConversationModal() {
    return (
        <>
        <Modal.Header closeButton>Create Conversation</Modal.Header>
        <Modal.Body>
            <div></div>
        <Form onSubmit={handleSubmit}>
            {contacts.map(contact => {

            })}
            <Button type="submit">Create</Button>
        </Form>
        </Modal.Body>
        </>
    )
}
