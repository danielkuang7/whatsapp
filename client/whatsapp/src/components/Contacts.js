import React from 'react'
import { useContacts } from '../contexts/ContactsProvider';

export default function Contacts() {
    const { contacts } = useContacts()
    return (
        <div>
            Contacts
        </div>
    )
}
