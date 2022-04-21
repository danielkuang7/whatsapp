import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useConversations } from '../contexts/ConversationsProvider'

export default function Conversations() {
    const { conversations }
    = useConversations()
    return (
        <ListGroup variant="flush">
        {conversations.map(conversation, index => (
            <ListGroup.Item key={conversation.id}>
               {conversation.name} 
            </ListGroup.Item>
        ))}
        </ListGroup>
    )
}
