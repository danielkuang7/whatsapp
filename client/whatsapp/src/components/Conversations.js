import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function Conversations() {
    return (
        <ListGroup variant="flush">
        {conversations.map(conversation => (
            <ListGroup.Item key={conversation.id}>
               {conversation.name} 
            </ListGroup.Item>
        ))}
        </ListGroup>
    )
}
