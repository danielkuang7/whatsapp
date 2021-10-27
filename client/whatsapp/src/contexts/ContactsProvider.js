import React, { useContext } from 'react'

const ContactsContext = React.createContext()

export function ContactsProvider({ children }) {
    const [contacts, setContacts] = useLocalStorage('contacts', [])

    return (
        <ContactsContext.Provider value={{ contacts, createContact }}>
            {children}
        </ContactsContext.Provider>
    )
}
