import React, { useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const ConversationsContext = React.createContext()

export function useConversations(){
    return useContext(ConversationsContext)
}

export function ConversationsProvider({ children }) {
    const [conversations, setConversations] = useLocalStorage('conversations', [])

    function createConversation(recipients){
        setConversations(prevConversations => {
            return [...prevConversations, {id, name}]
        })
    }

    return (
        <ContactsContext.Provider value={{ contacts, createContact }}>
            {children}
        </ContactsContext.Provider>
    )
}