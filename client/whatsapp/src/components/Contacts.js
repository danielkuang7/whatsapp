import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider';

export default function Contacts() {
    const { contacts } = useContacts()
    return (
        <div>
            Contacts
        </div>
    )
}
