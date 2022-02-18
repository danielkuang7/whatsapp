import React, { useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const ConversationsContext = React.createContext()

export function useConversations(){
    return useContext(ConversationsContext)
}

export function ConversationsProvider({ children }) {
    const [contacts, setContacts] = useLocalStorage('contacts', [])

    function createContact(id, name){
        setContacts(prevContacts => {
            return [...prevContacts, {id, name}]
        })
    }

    return (
        <ContactsContext.Provider value={{ contacts, createContact }}>
            {children}
        </ContactsContext.Provider>
    )
}