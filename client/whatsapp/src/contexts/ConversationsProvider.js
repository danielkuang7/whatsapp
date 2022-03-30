import React, { useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { useContacts } from './ContactsProvider'

const ConversationsContext = React.createContext()

export function useConversations(){
    return useContext(ConversationsContext)
}

export function ConversationsProvider({ children }) {
    const [conversations, setConversations] = useLocalStorage('conversations', [])
    const { contacts } = useContact()

    function createConversation(recipients){
        setConversations(prevConversations => {
            return [...prevConversations, { recipients, messages: []}]
        })
    }

    const formattedConversations = conversations.map(conversations => {
    const recipients = conversation.recipients.map(recipient =>{
        const contact = contacts.find (contact => {
            return contact.id === recipient
        })
    })
    })

    return (
        <ConversationsContext.Provider value={{ conversations, createConversation }}>
            {children}
        </ConversationsContext.Provider>
    )
}