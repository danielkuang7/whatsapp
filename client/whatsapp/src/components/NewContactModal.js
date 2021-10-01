import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

export default function NewContactModal({ closeModal}) {
    function handleSubmit(e){
        e.preventDefault()
    }
    return (
        <>
        <Modal.Header closeButton>Create Contact</Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}></Form>
        </Modal.Body>
        </>
    )
}
