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
            return [...prevConversations, { recipients, messages: []}]
        })
    }

    const formattedConversations = conversations.map(conversations => {
    const recipients = conversation.recipients.map(recipient =>{
        
    })
    })

    return (
        <ConversationsContext.Provider value={{ conversations, createConversation }}>
            {children}
        </ConversationsContext.Provider>
    )
}