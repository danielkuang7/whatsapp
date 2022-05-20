import React from 'react'
import { Form } from 'react-bootstrap'

export default function OpenConversation() {
    return (
        <div className="d-flex flex-column flex-grow-1">
            <div className="flex-grow-1 overflow-auto">

            </div>
            <Form>
                <Form.Group>
                    <InputGroup>
                    </InputGroup>
                </Form.Group>
            </Form>
        </div>
    )
}
